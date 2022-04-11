/// <reference path="../steps.d.ts" />
const assert = require('assert');

Feature('settings');

/*Scenario('invite a co-Owner',async ({ I }) => { 
    I.say('invite a co-Owner, 1er cas tout est correct ');
    I.login('teceye3542@petloca.com', 'Azerty123!');
    I.amOnPage('https://careercard.4d-ps.com/Settings');
    I.click('#root > div > div > div.css-jfo9gg > div > div > div > div.sc-qOoqx.dbPKjo > div > label > button > span.MuiButton-label');
    I.fillField('emailOrPhone','doremaima@hotmail.com'); 
    I.click('Invite');
    I.dontSeeElement('emailOrPhone');
   
})*/

Scenario('invite a co-Owner',async ({ I }) => { 
    I.say('invite a co-Owner, 2eme cas email incorrect ');
    I.login('teceye3542@petloca.com', 'Azerty123!');
    I.amOnPage('https://careercard.4d-ps.com/Settings');
    I.click('#root > div > div > div.css-jfo9gg > div > div > div > div.sc-qOoqx.dbPKjo > div > label > button > span.MuiButton-label');
    I.fillField('emailOrPhone','doremaimahotmail.com'); 
    I.click('Invite');
    const invite_error1 = await I.grabTextFrom('div.sc-ewSTlh ');
    assert.equal(invite_error1,'Please enter valid phone number or email.');
   
})