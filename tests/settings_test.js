/// <reference path="../steps.d.ts" />
const assert = require('assert');

Feature('@settings');

Before(async ({ I, loginPage })=>{
    loginPage.login(conf.login_url, conf.login_email, conf.login_password);
})

Scenario('inviter un co owner',async ({ I, settingsPage }) => { 
    settingsPage.inviteCoowner(conf.settings_url);
})

Scenario('ajouter une carte pass',async ({ I, settingsPage }) => { 
    settingsPage.addNewCardPass(conf.payment_url);
})

Scenario('ajouter une carte sans aucune saisie',async ({ I, settingsPage }) => { 
    settingsPage.addNewCardWithoutFields(conf.payment_url);
    const numberErreur = await I.grabTextFrom(settingsPage.fields.errorMsgNumber);
    assert.equal(numberErreur,'cardNumber is a required field');
    const cvcErreur = await I.grabTextFrom(settingsPage.fields.errorMsgCvc);
    assert.equal(cvcErreur,'cvc is a required field');
    const nameErreur = await I.grabTextFrom(settingsPage.fields.errorMsgName);
    assert.equal(nameErreur,'holderName is a required field');
    const monthErreur = await I.grabTextFrom(settingsPage.fields.errorMsgMonth);
    assert.equal(monthErreur,'expiryMonth is a required field');
    const yearErreur = await I.grabTextFrom(settingsPage.fields.errorMsgYear);
    assert.equal(yearErreur,'expiryYear is a required field');
})

Scenario('ajouter une carte sans numero',async ({ I, settingsPage }) => { 
    settingsPage.addNewCardWithoutNum(conf.payment_url);
    const nameErreur = await I.grabTextFrom(settingsPage.fields.errorMsgName);
  assert.equal(nameErreur,'cardNumber is a required field');
})

Scenario('ajouter une carte sans cvc',async ({ I, settingsPage }) => { 
    settingsPage.addNewCardWithoutCvc(conf.payment_url);
    const cvcErreur = await I.grabTextFrom(settingsPage.fields.errorMsgCvc);
    assert.equal(cvcErreur,'cvc is a required field');
})

Scenario('ajouter une carte sans nom',async ({ I, settingsPage }) => { 
    settingsPage.addNewCardWithoutName(conf.payment_url);
    const nameErreur = await I.grabTextFrom(settingsPage.fields.errorMsgName);
  assert.equal(nameErreur,'holderName is a required field');
})

Scenario('ajouter une carte sans mois d expiration',async ({ I, settingsPage }) => { 
    settingsPage.addNewCardWithoutExpiryMonth(conf.payment_url);
    const monthErreur = await I.grabTextFrom(settingsPage.fields.errorMsgMonth);
    assert.equal(monthErreur,'expiryMonth is a required field');
})

Scenario('ajouter une carte sans annee d expiration',async ({ I, settingsPage }) => { 
    settingsPage.addNewCardWithoutExpiryYear(conf.payment_url);
    const yearErreur = await I.grabTextFrom(settingsPage.fields.errorMsgYear);
    assert.equal(yearErreur,'expiryYear is a required field');
})

Scenario('ajouter une carte avec format de num incorrect',async ({ I, settingsPage }) => { 
    settingsPage.addNewCardnumberWrongFormat(conf.payment_url);
})

Scenario('ajouter une carte avec format de cvc incorrect',async ({ I, settingsPage }) => { 
    settingsPage.addNewCardCvcWrongFormat(conf.payment_url);
    const cvcErreur = await I.grabTextFrom(settingsPage.fields.errorMsgCvcWrongFormat);
  assert.equal(cvcErreur,'cvc must be at least 3 characters');
})

Scenario('ajouter une carte avec format du mois d expiration incorrect',async ({ I, settingsPage }) => { 
    settingsPage.addNewCardExpiryMonthWrongFormat(conf.payment_url);
    const expiryMonthError = await I.grabTextFrom(settingsPage.fields.errorMsgExpiryMonthWrongFormat);
    assert.equal(expiryMonthError,'expiryMonth must be at least 2 characters');
})

Scenario('ajouter une carte avec format d annee d expiration incorrect',async ({ I, settingsPage }) => { 
    settingsPage.addNewCardExpiryYearWrongFormat(conf.payment_url);
    const expiryYearError = await I.grabTextFrom(settingsPage.fields.errorMsgExpiryYearWrongFormat);
    assert.equal(expiryYearError,'expiryYear must be at least 2 characters');
})



