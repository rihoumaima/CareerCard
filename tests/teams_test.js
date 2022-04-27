/// <reference path="../steps.d.ts" />
const assert = require('assert');

Feature('@teams');

Before(async ({ I, loginPage })=>{
    loginPage.login(conf.login_url, conf.login_email, conf.login_password);

})

Scenario('creation d\'une team pass', async ({ I, teamsPage}) => { 
    teamsPage.creation_team_pass(teams_url);
})


Scenario('creation d\'une team sans image', async ({ I, teamsPage}) => { 
    teamsPage.creation_team_fail_missing_file(conf.teams_url);
    const erreur = await I.grabTextFrom(teamsPage.fields.errorMsgInsertionDimage);
    assert.equal(erreur,'Team Icon is mandatory, please upload a valid Image.');

})

Scenario('creation d\'une team sans nom', async ({ I, teamsPage}) => { 
    teamsPage.creation_team_fail_missing_name(teams_url);
    const erreur = await I.grabTextFrom(teamsPage.fields.errorMsgInsertionDuNom);
     assert.equal(erreur,'Team Icon is mandatory, please upload a valid Image.');
})


Scenario('creation d\'une team sans type', async ({ I, teamsPage}) => { 
    teamsPage.creation_team_fail_missing_type(teams_url);
    const erreur = await I.grabTextFrom(teamsPage.fields.creation_team_fail_missing_type);
      assert.equal(erreur,'Team type is required');
})

Scenario('delete a team', async ({ I, teamsPage}) => { 
    teamsPage.delete_a_team(teams_url);
})

Scenario('edit a team', async ({ I, teamsPage}) => { 
    teamsPage.editer_une_team(teams_url);
})

Scenario('filtrer les teams', async ({ I, teamsPage}) => { 
    teamsPage.teamsFiltre(teams_url);
})