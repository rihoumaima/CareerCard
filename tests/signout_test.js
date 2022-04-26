/// <reference path="../steps.d.ts" />
const assert = require('assert');

Feature('@signout');

Before(async ({ I, loginPage })=>{
    loginPage.login(conf.login_url, conf.login_email, conf.login_password);

})
Scenario('sign out',async ({ I,signoutPage}) => { 
    signoutPage.signout(conf.dashboard_url)

})