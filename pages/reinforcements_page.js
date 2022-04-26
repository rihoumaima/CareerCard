const {I} = inject();

module.exports = {

  
  fields: {
      createReinforcementButton:'#root > div > div > div.css-jfo9gg > div.css-dxc04m > a',
      deleteButton: '//*[@id="root"]/div/div/div[3]/div[2]/div/div[3]/div/div/div/table/tbody/tr[1]/td[7]/div/div[2]/label/button/span[1]/span',
      bouttonDeLaConfirmationDeSuppression: '#chakra-modal--body-22 > footer > button.chakra-button.css-pu8osu',
      editButton: '#root > div > div > div.css-jfo9gg > div > div > div.sc-jcneYm.sc-gloWDX.cKDdmH.fpZUXo > div > div.jss12 > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(7) > div > div:nth-child(1) > label > button > span.MuiButton-label > span',
      editDescription: 'description',
      editPoints: 'points',
      submitEdit: '#chakra-modal--body-21 > form > button',
      searchButton: '#root > div > div > div.css-jfo9gg > div > div > div.sc-jcneYm.sc-gloWDX.cKDdmH.fpZUXo > div > div.MuiToolbar-root.MuiToolbar-regular.jss112.MuiToolbar-gutters > div.MuiFormControl-root.MuiTextField-root.jss117 > div > input',
      dropdownlistType: 'Type',
      dropdownlistTeam: 'Team',
      laCaseDeDescription: 'description',
      laCaseDesPoints: 'points',
      bouttonDeLaConfirmationDeLaCreation: 'Create'

   
  },
  createReinforcement(manageReinforcements_url){
    I.say('create a reinforcement');
    I.amOnPage(manageReinforcements_url);
    I.click(this.fields.createReinforcementButton);
    I.selectOption(this.fields.dropdownlistType,'Company');
    I.selectOption(this.fields.dropdownlistTeam,'QA team 1');
    I.fillField(this.fields.laCaseDeDescription,'test');
    I.fillField(this.fields.laCaseDesPoints,'10');
    I.click(this.fields.bouttonDeLaConfirmationDeLaCreation);
    I.refreshPage(manageReinforcements_url);
    I.seeElement(this.fields.laCaseDeDescription);
},
 deleteReinforcement(manageReinforcements_url){
    I.say('delete a reinforcement');
    I.amOnPage(manageReinforcements_url)
    I.click(this.fields.deleteButton);
    I.click(this.fields.bouttonDeLaConfirmationDeSuppression);
    I.dontSeeElement(this.fields.bouttonDeLaConfirmationDeSuppression);
  },
    editReinforcement(manageReinforcements_url){
    I.say('edit a reinforcement');
    I.amOnPage(manageReinforcements_url);
    I.click(this.fields.editButton);
    I.click(this.fields.editDescription);
    I.wait(5)
    I.pressKey('Backspace');
    I.fillField(this.fields.editDescription,'test');
    I.click(this.fields.editPoints);
    I.pressKey('Backspace');
    I.wait(5)
    I.fillField(this.fields.editPoints,'10');
    I.click(this.fields.submitEdit);
    I.refreshPage(manageReinforcements_url);
},
searchingForAReinforcement(manageReinforcements_url){
  I.say('searching for a reinforcement');
  I.amOnPage(manageReinforcements_url);
  I.fillField(this.fields.searchButton,'test 3');
  I.wait(3);
  I.dontSeeElement(this.fields.deleteButton);
}
}