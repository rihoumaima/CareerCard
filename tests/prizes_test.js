/// <reference path="../steps.d.ts" />
const assert = require('assert');

Feature('@prizes');
Before(async ({ I, loginPage })=>{
    loginPage.login(conf.login_url, conf.login_email, conf.login_password);},

Scenario('creer un prize pass',async ({ I, prizesPage }) => { 
    prizesPage.createPrizePass(conf.prizes_url);
}))

Scenario('creer un prize sans nom',async ({ I, prizesPage }) => { 
    prizesPage.createPrizeWithoutName(conf.prizes_url);
    const erreur = await I.grabTextFrom(prizesPage.fields.erreurNameMsg);
    assert.equal(erreur,'The prize name is Required');
})

Scenario('creer un prize sans fichier',async ({ I, prizesPage }) => { 
    prizesPage.createPrizeWithoutFile(conf.prizes_url);
    const erreur = await I.grabTextFrom(prizesPage.fields.erreurfileMsg);
    assert.equal(erreur,'A file is required');
})

Scenario('editer un prize',async ({ I, prizesPage }) => { 
    prizesPage.editPrize(conf.prizes_url);
})

Scenario('supprimer un prize',async ({ I, prizesPage }) => { 
    prizesPage.deletePrize(conf.prizes_url);
})

Scenario('rechercher un prize',async ({ I, prizesPage }) => { 
    prizesPage.searchingForAPrize(conf.prizes_url)
})

Scenario('filtrer les prizes',async ({ I, prizesPage }) => { 
    prizesPage.prizeFiltre(conf.prizes_url)
})


