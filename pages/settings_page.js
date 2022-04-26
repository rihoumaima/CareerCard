const {I} = inject();
const assert = require('assert');

module.exports = {

  fields: {
      inviteButton: '#root > div > div > div.css-jfo9gg > div > div > div > div.sc-qOoqx.dbPKjo > div > label > button > span.MuiButton-label' ,
      emailButton: 'emailOrPhone',
      bouttonDeconfirmationDinvitation: 'Invite',
      numCarte: 'cardNumber',
      cvc: 'CVC',
      name: 'holderName',
      moisExpiration: 'expiryMonth',
      anneeExpiration: 'expiryYear',
      create: '#root > div > div > div.css-jfo9gg > div.sc-bJcRwn.cHMvGK > div > div > div > form > div > div.sc-fpGCtG.hgwjvP > div.sc-gNUafA.fOHNMU > div:nth-child(2) > label > button > span.MuiButton-label',
      errorMsgNumber: '#root > div > div > div.css-jfo9gg > div.sc-bJcRwn.cHMvGK > div > div > div > form > div > div.sc-fpGCtG.hgwjvP > div.sc-OVzLa.uSVAy > span',
      errorMsgCvc:'#root > div > div > div.css-jfo9gg > div.sc-bJcRwn.cHMvGK > div > div > div > form > div > div.sc-fpGCtG.hgwjvP > div.sc-OVzLa.uSVAy > span:nth-child(6)',
      errorMsgName: '#root > div > div > div.css-jfo9gg > div.sc-bJcRwn.cHMvGK > div > div > div > form > div > div.sc-fpGCtG.hgwjvP > div.sc-OVzLa.uSVAy > span:nth-child(8)',
      errorMsgMonth:'#root > div > div > div.css-jfo9gg > div.sc-bJcRwn.cHMvGK > div > div > div > form > div > div.sc-fpGCtG.hgwjvP > div.sc-OVzLa.uSVAy > span:nth-child(11)',
      errorMsgYear:'#root > div > div > div.css-jfo9gg > div.sc-bJcRwn.cHMvGK > div > div > div > form > div > div.sc-fpGCtG.hgwjvP > div.sc-OVzLa.uSVAy > span:nth-child(10)',
      errorMsgCvcWrongFormat:'#root > div > div > div.css-jfo9gg > div.sc-bJcRwn.cHMvGK > div > div > div > form > div > div.sc-fpGCtG.hgwjvP > div.sc-OVzLa.uSVAy > span',
      errorMsgExpiryMonthWrongFormat:'#root > div > div > div.css-jfo9gg > div.sc-bJcRwn.cHMvGK > div > div > div > form > div > div.sc-fpGCtG.hgwjvP > div.sc-OVzLa.uSVAy > span:nth-child(10)',
      errorMsgExpiryYearWrongFormat:'#root > div > div > div.css-jfo9gg > div.sc-bJcRwn.cHMvGK > div > div > div > form > div > div.sc-fpGCtG.hgwjvP > div.sc-OVzLa.uSVAy > span:nth-child(10)',

  },
  inviteCoowner(settings_url){
  I.say('invite a co-Owner');
  I.amOnPage(settings_url);
  I.click(this.fields.inviteButton);
  I.fillField(this.fields.emailButton,'doremaima@hotmail.com'); 
  I.click(this.fields.bouttonDeconfirmationDinvitation);
  I.dontSeeElement('emailOrPhone');
  
},
addNewCardPass(payment_url){
  I.amOnPage(payment_url);
  I.fillField(this.fields.numCarte,'1234567890123456');
  I.fillField(this.fields.cvc,'123');
  I.fillField(this.fields.name,'oumaima');
  I.fillField(this.fields.moisExpiration,'07');
  I.fillField(this.fields.anneeExpiration,'2024');
  I.click(this.fields.create);
  //s'assurer que la carte a ete ajoutee
},
addNewCardWithoutFields(payment_url){
  I.amOnPage(payment_url);
  I.click(this.fields.create);
  const numberErreur = await I.grabTextFrom(this.fields.errorMsgNumber);
  assert.equal(numberErreur,'cardNumber is a required field');
  const cvcErreur = await I.grabTextFrom(this.fields.errorMsgCvc);
  assert.equal(cvcErreur,'cvc is a required field');
  const nameErreur = await I.grabTextFrom(this.fields.errorMsgName);
  assert.equal(nameErreur,'holderName is a required field');
  const monthErreur = await I.grabTextFrom(this.fields.errorMsgMonth);
  assert.equal(monthErreur,'expiryMonth is a required field');
  const yearErreur = await I.grabTextFrom(this.fields.errorMsgYear);
  assert.equal(yearErreur,'expiryYear is a required field');
},
addNewCardWithoutNum(payment_url){
  I.amOnPage(payment_url);
  I.fillField(this.fields.cvc,'123');
  I.fillField(this.fields.name,'oumaima');
  I.fillField(this.fields.moisExpiration,'07');
  I.fillField(this.fields.anneeExpiration,'2024');
  I.click(this.fields.create);
  const nameErreur = await I.grabTextFrom(this.fields.errorMsgName);
  assert.equal(nameErreur,'cardNumber is a required field');
},
addNewCardWithoutCvc(payment_url){
  I.amOnPage(payment_url);
  I.fillField(this.fields.numCarte,'1234567890123456');
  I.fillField(this.fields.name,'oumaima');
  I.fillField(this.fields.moisExpiration,'07');
  I.fillField(this.fields.anneeExpiration,'2024');
  I.click(this.fields.create);
  const cvcErreur = await I.grabTextFrom(this.fields.errorMsgCvc);
  assert.equal(cvcErreur,'cvc is a required field');
},
addNewCardWithoutName(payment_url){
  I.amOnPage(payment_url);
  I.fillField(this.fields.numCarte,'1234567890123456');
  I.fillField(this.fields.cvc,'123');
  I.fillField(this.fields.moisExpiration,'07');
  I.fillField(this.fields.anneeExpiration,'2024');
  I.click(this.fields.create);
  const nameErreur = await I.grabTextFrom(this.fields.errorMsgName);
  assert.equal(nameErreur,'holderName is a required field');
},
addNewCardWithoutExpiryMonth(payment_url){
  I.amOnPage(payment_url);
  I.fillField(this.fields.numCarte,'1234567890123456');
  I.fillField(this.fields.cvc,'123');
  I.fillField(this.fields.name,'oumaima');
  I.fillField(this.fields.anneeExpiration,'2024');
  I.click(this.fields.create);
  const monthErreur = await I.grabTextFrom(this.fields.errorMsgMonth);
  assert.equal(monthErreur,'expiryMonth is a required field');
},
addNewCardWithoutExpiryYear(payment_url){
  I.amOnPage(payment_url);
  I.fillField(this.fields.numCarte,'1234567890123456');
  I.fillField(this.fields.cvc,'123');
  I.fillField(this.fields.name,'oumaima');
  I.fillField(this.fields.moisExpiration,'07');
  I.click(this.fields.create);
  const yearErreur = await I.grabTextFrom(this.fields.errorMsgYear);
  assert.equal(yearErreur,'expiryYear is a required field');
},
addNewCardPass(payment_url){
  I.amOnPage(payment_url);
  I.fillField(this.fields.numCarte,'1234567890123456');
  I.fillField(this.fields.cvc,'123');
  I.fillField(this.fields.name,'oumaima');
  I.fillField(this.fields.moisExpiration,'07');
  I.fillField(this.fields.anneeExpiration,'2024');
  I.click(this.fields.create);
},
addNewCardnumberWrongFormat(payment_url){
  I.amOnPage(payment_url);
  I.fillField(this.fields.numCarte,'123456789012345');
  I.fillField(this.fields.cvc,'123');
  I.fillField(this.fields.name,'oumaima');
  I.fillField(this.fields.moisExpiration,'07');
  I.fillField(this.fields.anneeExpiration,'2024');
  I.click(this.fields.create);
  I.see('cardNumber must be at least 16 characters')
},
addNewCardCvcWrongFormat(payment_url){
  I.amOnPage(payment_url);
  I.fillField(this.fields.numCarte,'1234567890123456');
  I.fillField(this.fields.cvc,'12');
  I.fillField(this.fields.name,'oumaima');
  I.fillField(this.fields.moisExpiration,'07');
  I.fillField(this.fields.anneeExpiration,'2024');
  I.click(this.fields.create);
  const cvcErreur = await I.grabTextFrom(this.fields.errorMsgCvcWrongFormat);
  assert.equal(cvcErreur,'cvc must be at least 3 characters');
},
addNewCardExpiryMonthWrongFormat(payment_url){
  I.amOnPage(payment_url);
  I.fillField(this.fields.numCarte,'1234567890123456');
  I.fillField(this.fields.cvc,'123');
  I.fillField(this.fields.name,'oumaima');
  I.fillField(this.fields.moisExpiration,'7');
  I.fillField(this.fields.anneeExpiration,'2024');
  I.click(this.fields.create);
  const expiryMonthError = await I.grabTextFrom(this.fields.errorMsgExpiryMonthWrongFormat);
  assert.equal(expiryMonthError,'expiryMonth must be at least 2 characters');
},
addNewCardExpiryYearWrongFormat(payment_url){
  I.amOnPage(payment_url);
  I.fillField(this.fields.numCarte,'1234567890123456');
  I.fillField(this.fields.cvc,'123');
  I.fillField(this.fields.name,'oumaima');
  I.fillField(this.fields.moisExpiration,'07');
  I.fillField(this.fields.anneeExpiration,'2');
  I.click(this.fields.create);
  const expiryYearError = await I.grabTextFrom(this.fields.errorMsgExpiryYearWrongFormat);
  assert.equal(expiryYearError,'expiryYear must be at least 2 characters');
},

}