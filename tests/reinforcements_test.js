/// <reference path="../steps.d.ts" />
const assert = require('assert');

Before(async ({ I, loginPage })=>{
    loginPage.login(conf.login_url, conf.login_email, conf.login_password);},

Feature('@reinforcements')
)
Scenario('delete a reinforcement',async ({ I, reinforcementsPage }) => { 
    reinforcementsPage.deleteReinforcement(conf.manageReinforcements_url)
})

Scenario('edit a reinforcement',async ({ I, reinforcementsPage }) => { 
    reinforcementsPage.editReinforcement(conf.manageReinforcements_url)
})

Scenario('searching for a reinforcement',async ({ I, reinforcementsPage }) => { 
    reinforcementsPage.searchingForAReinforcement(conf.manageReinforcements_url)
})