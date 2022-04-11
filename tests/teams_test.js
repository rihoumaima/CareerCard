/// <reference path="../steps.d.ts" />
const assert = require('assert');

Feature('@teams');

Before(async ({ I, loginPage })=>{
    loginPage.login(conf.login_url, conf.login_email, conf.login_password);

})

Scenario('creation d\'une team avec une icone manquante', async ({ I, teamsPage}) => { 
    teamsPage.creation_team_fail_missing_file(conf.teams_url);
    I.wait(1);
    const erreur = await I.grabTextFrom('#chakra-modal--body-6 > form > div > div:nth-child(6)');
    assert.equal(erreur,'Team Icon is mandatory, please upload a valid Image.');
})