/// <reference path="../steps.d.ts" />
const assert = require('assert');

Feature('@prizes');
Before(async ({ I, loginPage })=>{
    loginPage.login(conf.login_url, conf.login_email, conf.login_password);},

Scenario('creer un prize pass',async ({ I, prizesPage }) => { 
    prizesPage.createPrizePass(conf.prizes_url)
}))

Scenario('creer un prize sans nom',async ({ I, prizesPage }) => { 
    prizesPage.createPrizeWithoutName(conf.prizes_url)
})

Scenario('creer un prize sans fichier',async ({ I, prizesPage }) => { 
    prizesPage.createPrizeWithoutFile(conf.prizes_url)
})


