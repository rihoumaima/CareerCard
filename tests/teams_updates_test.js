/// <reference path="../steps.d.ts" />
const assert = require('assert');

Feature('updates');

Scenario('editer une team',async ({ I }) => { 
    I.say('edit');
    I.login('yebega7398@nuesond.com', 'Admin1234@'); 
    I.amOnPage('https://careercard.4d-ps.com/Teams#/')
    I.click('#root > div > div > div.css-jfo9gg > div.sc-dkQkyq.sc-jivBlf.fDiXhU.cSPwSG > div > div.jss12 > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(9) > div > div:nth-child(1) > label > button > span.MuiButton-label > span > svg > path:nth-child(1)')
    
})

Scenario('delete',async ({ I }) => { 
    I.say('delete');
    I.login('yebega7398@nuesond.com', 'Admin1234@'); 
    I.amOnPage('https://careercard.4d-ps.com/Teams#/')
    I.click('#root > div > div > div.css-jfo9gg > div.sc-dkQkyq.sc-jivBlf.fDiXhU.cSPwSG > div > div.jss372 > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(9) > div > div:nth-child(2) > label > button > span.MuiButton-label > span > svg');
    I.click('body > div.jss570 > div.jss571.jss572 > div > div.sc-jIkXHa.eVSPhG > div:nth-child(2)');
    
})