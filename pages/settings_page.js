const {I} = inject();

module.exports = {

  fields: {
      inviteButton: '#root > div > div > div.css-jfo9gg > div > div > div > div.sc-qOoqx.dbPKjo > div > label > button > span.MuiButton-label' ,
      emailButton: 'emailOrPhone',
      bouttonDeconfirmationDinvitation: 'Invite'

  },
  inviteCoowner(settings_url){
  I.say('invite a co-Owner');
  I.amOnPage(settings_url);
  I.click(this.fields.inviteButton);
  I.fillField(this.fields.emailButton,'doremaima@hotmail.com'); 
  I.click(this.fields.bouttonDeconfirmationDinvitation);
  I.dontSeeElement('emailOrPhone');
},



}