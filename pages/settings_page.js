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
  I.say('ajouter une carte pass');
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
  I.say('ajouter une carte sans aucune saisie');
  I.amOnPage(payment_url);
  I.click(this.fields.create);
},
addNewCardWithoutNum(payment_url){
  I.say('ajouter une carte sans numero');
  I.amOnPage(payment_url);
  I.fillField(this.fields.cvc,'123');
  I.fillField(this.fields.name,'oumaima');
  I.fillField(this.fields.moisExpiration,'07');
  I.fillField(this.fields.anneeExpiration,'2024');
  I.click(this.fields.create);  
},
addNewCardWithoutCvc(payment_url){    
  I.say('ajouter une carte sans cvc');
  I.amOnPage(payment_url);
  I.fillField(this.fields.numCarte,'1234567890123456');
  I.fillField(this.fields.name,'oumaima');
  I.fillField(this.fields.moisExpiration,'07');
  I.fillField(this.fields.anneeExpiration,'2024');
  I.click(this.fields.create); 
},
addNewCardWithoutName(payment_url){
  I.say('ajouter une carte sans nom');
  I.amOnPage(payment_url);
  I.fillField(this.fields.numCarte,'1234567890123456');
  I.fillField(this.fields.cvc,'123');
  I.fillField(this.fields.moisExpiration,'07');
  I.fillField(this.fields.anneeExpiration,'2024');
  I.click(this.fields.create); 
},
addNewCardWithoutExpiryMonth(payment_url){
  I.say('ajouter une carte sans mois d expiration');
  I.amOnPage(payment_url);
  I.fillField(this.fields.numCarte,'1234567890123456');
  I.fillField(this.fields.cvc,'123');
  I.fillField(this.fields.name,'oumaima');
  I.fillField(this.fields.anneeExpiration,'2024');
  I.click(this.fields.create);
},
addNewCardWithoutExpiryYear(payment_url){
  I.say('ajouter une carte sans annee d expiration');
  I.amOnPage(payment_url);
  I.fillField(this.fields.numCarte,'1234567890123456');
  I.fillField(this.fields.cvc,'123');
  I.fillField(this.fields.name,'oumaima');
  I.fillField(this.fields.moisExpiration,'07');
  I.click(this.fields.create);
},
addNewCardnumberWrongFormat(payment_url){
  I.say('ajouter une carte avec format de num incorrect');
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
  I.say('ajouter une carte avec format de cvc incorrrect');
  I.amOnPage(payment_url);
  I.fillField(this.fields.numCarte,'1234567890123456');
  I.fillField(this.fields.cvc,'12');
  I.fillField(this.fields.name,'oumaima');
  I.fillField(this.fields.moisExpiration,'07');
  I.fillField(this.fields.anneeExpiration,'2024');
  I.click(this.fields.create);
},
addNewCardExpiryMonthWrongFormat(payment_url){
  I.say('ajouter une carte avec format du mois d expiration incorrect');
  I.amOnPage(payment_url);
  I.fillField(this.fields.numCarte,'1234567890123456');
  I.fillField(this.fields.cvc,'123');
  I.fillField(this.fields.name,'oumaima');
  I.fillField(this.fields.moisExpiration,'7');
  I.fillField(this.fields.anneeExpiration,'2024');
  I.click(this.fields.create);
},
addNewCardExpiryYearWrongFormat(payment_url){
  I.say('ajouter une carte avec foramt d annee d expiration incorrect');
  I.amOnPage(payment_url);
  I.fillField(this.fields.numCarte,'1234567890123456');
  I.fillField(this.fields.cvc,'123');
  I.fillField(this.fields.name,'oumaima');
  I.fillField(this.fields.moisExpiration,'07');
  I.fillField(this.fields.anneeExpiration,'2');
  I.click(this.fields.create);
},

}