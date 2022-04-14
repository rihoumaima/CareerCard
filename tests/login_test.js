/// <reference path="./../steps.d.ts" />
const assert = require('assert');
Feature('@login');

Scenario('connexion avec des coordonnes corrects',async ({ I, loginPage }) => { 
    
    loginPage.login(conf.login_url, conf.login_email, conf.login_password);
    I.waitForInvisible(loginPage.fields.submitButton, 10);
    I.wait(5);
    I.seeInCurrentUrl('/Dashboard');
    
}) 

Scenario('connexion avec format email incorrect',async ({ I, loginPage }) => { 
    
    loginPage.login(conf.login_url, conf.login_email_failed_wrong_format, conf.login_password);
    const msg_error = await I.grabTextFrom(loginPage.fields.error_msg);
    assert.equal(msg_error,'Please enter a valid email');

})

Scenario('connexion avec mdp incorrect',async ({ I, loginPage }) => { 
    
    loginPage.login(conf.login_url, conf.login_email, conf.login_password_failed_wrong);
        const msg_error = await I.grabTextFrom(loginPage.fields.error_msg);
        assert.equal(msg_error,'WRONG_CREDENTIALS');

})

Scenario('connexion avec email inexistant',async ({ I, loginPage}) => { 

    loginPage.login(conf.login_url, conf.login_email_failed_wrong_data, conf.login_password);
    const msg_error = await I.grabTextFrom(loginPage.fields.error_msg);
    assert.equal(msg_error,'USER_NOT_FOUND');

})




