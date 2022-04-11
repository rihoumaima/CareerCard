/// <reference path="../steps.d.ts" />
const assert = require('assert');

Feature('members');

Scenario('delete a member',async ({ I }) => { 
    I.say('delete a member');
    I.login('yebega7398@nuesond.com', 'Admin1234@');
    I.amOnPage('https://careercard.4d-ps.com/Members');
    I.click(''); //clicker sur le boutton delete
    I.click(''); // refresh button
    I.dontSeeElement(''); //on teste si le boutton delete n est plus visible
})

Scenario('searching for a member',async ({ I }) => { 
    I.say('searching for a member');
    I.login('teceye3542@petloca.com', 'Azerty123!');
    I.amOnPage('https://careercard.4d-ps.com/Members');
    I.click('Search'); 
    I.fillField('Search','fairouz');
    
})