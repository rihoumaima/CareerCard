/// <reference path="../steps.d.ts" />
const assert = require('assert');

Feature('@members');
Before(async ({ I, loginPage })=>{
    loginPage.login(conf.login_url, conf.login_email, conf.login_password);
})

Scenario('delete a member',async ({ I, membersPage }) => { 
    membersPage.deleteMember(conf.members_url)
},

Scenario('searching for a member',async ({ I, membersPage }) => { 
    membersPage.searchingForAMember(conf.members_url)
   
}))