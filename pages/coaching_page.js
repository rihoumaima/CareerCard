const {I} = inject();
const assert = require('assert');

module.exports = {

    fields: {
        manageCoachingButton: '#root > div > div > div.css-jfo9gg > div > div > div.sc-cBsmfy.kSTXdG > a',
        createCoachingButton: '#root > div > div > div.css-jfo9gg > div > div > div.sc-gVFfnG.kgdEIS > a',
        dropdownlistType: 'Type',
        dropdownlistTeam: 'Team',
        laCaseDeDescription: 'description',
        laCaseDesPoints: 'points',
        bouttonDeLaConfirmationDeLaCreation: 'Create',
        deleteButton: '#root > div > div > div.css-jfo9gg > div > div > div.sc-kOJRsK.sc-hXLIYv.kQGniJ.bzVdRl > div > div.jss602 > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(7) > div > div:nth-child(2) > label > button > span.MuiButton-label > span > svg',
        bouttonDeLaConfirmationDeSuppression: '#chakra-modal--body-7 > footer > button.chakra-button.css-pu8osu',
        editButton: '#root > div > div > div.css-jfo9gg > div > div > div.sc-iiCSmI.sc-kOyqGX.egAzqZ.eOTonA > div > div.jss12 > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(7) > div > div:nth-child(1) > label > button > span.MuiButton-label > span',
        editDescription: 'description',
        editPoints: 'points',
        submitEdit: '#chakra-modal--body-10 > form > button'
    },

    createCoaching(manageCoaching_url){
        I.say('creer un coaching');
        I.amOnPage(manageCoaching_url);
        I.click(this.fields.createCoachingButton);
        I.selectOption(this.fields.dropdownlistType,'Company');
        I.selectOption(this.fields.dropdownlistTeam,'');//il te faut le nom du team 
        I.fillField(this.fields.laCaseDeDescription,'test');
        I.fillField(this.fields.laCaseDesPoints,'10');
        //s'assurer que le coaching a ete cree
    },
    deleteCoaching(manageCoaching_url){
        I.say('delete a coaching');
        I.amOnPage(manageCoaching_url)
        I.click(this.fields.deleteButton);
        I.click(this.fields.bouttonDeLaConfirmationDeSuppression);
        I.dontSeeElement(this.fields.bouttonDeLaConfirmationDeSuppression);
      },
        editCoaching(manageCoaching_url){
        I.say('edit a coaching');
        I.amOnPage(manageCoaching_url);
        I.click(this.fields.editButton);
        I.click(this.fields.editDescription);
        I.pressKey('Backspace');
        I.fillField(this.fields.editDescription,'test');
        I.click(this.fields.editPoints);
        I.pressKey('Backspace');
        I.fillField(this.fields.editPoints,'10');
        I.click(this.fields.submitEdit);
        I.refreshPage(manageCoaching_url)
     
},
searchingForACoaching(manageCoaching_url){
    I.say('searching for a coaching');
    I.amOnPage(manageCoaching_url);
    I.fillField(this.fields.searchButton,'test 3');
    I.wait(3);
    I.dontSeeElement(this.fields.deleteButton);
  }
}