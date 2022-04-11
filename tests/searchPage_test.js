/// <reference path="../steps.d.ts" />
const assert = require('assert');

Feature('searchPage');

Scenario('test btata', ({ I }) => {
    I.say('btata test');
    I.amOnPage('https://github.com');
    I.see('GitHub');

}).tag('btata');

Scenario('test limouna', ({ I }) => {
    I.say('limouna test');
    I.amOnPage('https://github.com');
    I.see('GitHub');

}).tag('limouna');

Scenario('search codeceptjs', async ({ I }) => {
    I.say('codeceptjs test test');
    I.amOnPage('https://codecept.io/');
    I.fillField('#algolia-search-input', 'puppeteer');
    I.waitForText('Puppeteer-firefox',10);
    I.amOnPage('https://codecept.io/helpers/Puppeteer/#puppeteer');
    I.click('#app > div.theme-container > aside > ul > li > div > ul > li:nth-child(4) > ul > li:nth-child(38) > a');
    const text = await I.grabTextFrom('//*[@id="app"]/div[1]/main/div[2]/article/div/blockquote[1]/p/a/text()');
    assert.notEqual(text, 'can be activated');

}).tag('search_codeceptjs');
