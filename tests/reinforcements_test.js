/// <reference path="../steps.d.ts" />
const assert = require('assert');

Feature('reinforcements');

Scenario('delete a reinforcement',async ({ I, reinforcementsPage }) => { 
    reinforcementsPage.deleteReinforcement(conf.reinforcements_url)
})

Scenario('edit a reinforcement',async ({ I, reinforcementsPage }) => { 
    reinforcementsPage.editReinforcement(conf.reinforcements_url)
})