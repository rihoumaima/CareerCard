const {I} = inject();

module.exports = {

  
  fields: {
      deleteButton: '#root > div > div > div.css-jfo9gg > div > div > div.sc-jcneYm.sc-gloWDX.cKDdmH.fpZUXo > div > div.jss12 > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(7) > div > div:nth-child(2) > label > button > span.MuiButton-label > span',
      bouttonDeLaConfirmationDeSuppression: '#chakra-modal--body-22 > footer > button.chakra-button.css-pu8osu',
      editButton: '#root > div > div > div.css-jfo9gg > div > div > div.sc-jcneYm.sc-gloWDX.cKDdmH.fpZUXo > div > div.jss12 > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(7) > div > div:nth-child(1) > label > button > span.MuiButton-label > span',
      editDescription: 'description',
      editPoints: 'points',
      submitEdit: '#chakra-modal--body-21 > form > button',

   
  },
 deleteReinforcement(reinforcements_url){
    I.say('delete a reinforcement');
    I.amOnPage(reinforcements_url)
    I.click(this.fields.deleteButton);
    I.click(this.fields.bouttonDeLaConfirmationDeSuppression);
    I.dontSeeElement(this.fields.bouttonDeLaConfirmationDeSuppression);
  },
    editReinforcement(reinforcements_url){
    I.say('edit a reinforcement');
    I.amOnPage(reinforcements_url);
    I.click(this.fields.editButton);
    I.click(this.fields.editDescription);
    I.pressKey('Backspace');
    I.fillField(this.fields.editDescription,'test');
    I.click(this.fields.editPoints);
    I.pressKey('Backspace');
    I.fillField(this.fields.editPoints,'10');
    I.click(this.fields.submitEdit);
    I.wait(3);
    I.see('Reinforcement informations updated.');
},

}