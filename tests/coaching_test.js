/// <reference path="./../steps.d.ts" />
const assert = require('assert');
Feature('@coaching');

Scenario('creer un coaching',async ({ I, coachingPage }) => { 
    
    coachingPage.createCoaching(conf.manageCoaching_url)
   
}) 