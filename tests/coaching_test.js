/// <reference path="./../steps.d.ts" />
const assert = require('assert');
Feature('@coaching');

Before(async ({ I, loginPage })=>{
    loginPage.login(conf.login_url, conf.login_email, conf.login_password);},

Scenario('creer un coaching',async ({ I, coachingPage }) => { 

        coachingPage.createCoaching(conf.manageCoaching_url)
       }),

 Scenario('supprimer un coaching',async ({ I, coachingPage }) => { 
    
        coachingPage.deleteCoaching(conf.manageCoaching_url)
 } ,
 Scenario('modifier un coaching',async ({ I, coachingPage }) => { 
    coachingPage.editCoaching(conf.manageCoaching_url)
}),
Scenario('rechercher un coaching',async ({ I, coachingPage }) => { 
    coachingPage.searchingForACoaching(conf.manageCoaching_url)
}),
Scenario('modifier un coaching',async ({ I, coachingPage }) => { 
    coachingPage.editCoaching(conf.manageCoaching_url)
}),
Scenario('filtrer les coachings',async ({ I, coachingPage }) => { 
    coachingPage.coachingsFiltre(conf.Coaching_url)
})
))

