/// <reference path="../steps.d.ts" />
const assert = require('assert');

Feature('sign out');


Scenario('sign out',async ({ I }) => { 
    I.say('sign out ');
    I.login('yebega7398@nuesond.com', 'Admin1234@');
    I.amOnPage('https://careercard.4d-ps.com/Dashboard');
    I.click('#menu-button-4');
    I.click('#menu-list-4-menuitem-2'); 
    I.seeElement('#root > div > div > div > form > div > div > div > div > div.container-mlogin-form-btn > button')
})