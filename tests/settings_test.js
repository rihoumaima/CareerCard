/// <reference path="../steps.d.ts" />
const assert = require('assert');

Feature('settings');

Scenario('inviter un co owner',async ({ I, settingsPage }) => { 
    settingsPage.inviteCoowner(conf.settings_url)
})

