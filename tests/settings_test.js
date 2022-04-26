/// <reference path="../steps.d.ts" />
const assert = require('assert');

Feature('@settings');
Before(async ({ I, loginPage })=>{
    loginPage.login(conf.login_url, conf.login_email, conf.login_password);
})

Scenario('inviter un co owner',async ({ I, settingsPage }) => { 
    settingsPage.inviteCoowner(conf.settings_url)
})

