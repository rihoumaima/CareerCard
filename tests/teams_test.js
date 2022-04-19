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

})

Scenario('creation d\'une team sans nom', async ({ I, teamsPage}) => { 
    teamsPage.creation_team_fail_missing_name(teams_url);
})


Scenario('creation d\'une team sans type', async ({ I, teamsPage}) => { 
    teamsPage.creation_team_fail_missing_type(teams_url);
})