const {I} = inject();
const assert = require('assert');

module.exports = {

    fields: {
      createButton: 'Create Team',
      submitButton: 'Create Team',
      refreshButton: 'refresh',
      editButton: '#root > div > div > div.css-jfo9gg > div.sc-dkQkyq.sc-jivBlf.fDiXhU.cSPwSG > div > div.jss12 > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(9) > div > div:nth-child(1) > label > button > span.MuiButton-label > span > svg > path:nth-child(1)',
      name: '#name',
      teamTypeButton: '//*[@id="chakra-modal--body-6"]/form/div/div[3]/label[2]/span[2]',
      deleteButton: '#root > div > div > div.css-jfo9gg > div.sc-dkQkyq.sc-jivBlf.fDiXhU.cSPwSG > div > div.jss372 > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(9) > div > div:nth-child(2) > label > button > span.MuiButton-label > span > svg' ,
      bouttonDeLaConfirmationDeSuppression: 'body > div.jss570 > div.jss571.jss572 > div > div.sc-jIkXHa.eVSPhG > div:nth-child(2)',
    },
  
    creation_team_pass(teams_url) {
      I.say('creer une team');
      I.amOnPage(teams_url); 
      I.click(this.fields.createButton);
      I.waitForVisible(this.fields.name, 5);
      I.fillField(this.fields.name, 'test');
      //export an image here 
      I.click(this.fields.teamTypeButton);
      I.click(this.fields.submitButton);
      I.click(this.fields.refreshButton);
      I.waitForElement(this.fields.name,5);
      
    },

    creation_team_fail_missing_file(teams_url) {
        I.say('creer une team sans fichier');
        I.amOnPage(teams_url); 
        I.click(this.fields.createButton);
        I.waitForVisible(this.fields.name, 5);
        I.fillField(this.fields.name, 'test');
        I.click(this.fields.teamTypeButton);
        I.click(this.fields.submitButton);
        
      },

      
    creation_team_fail_missing_name(teams_url) {
      I.say('creer une team sans nom');
      I.amOnPage(teams_url); 
      I.click(this.fields.createButton);
      I.waitForVisible(this.fields.name, 5);
      //image here
      I.click(this.fields.teamTypeButton);
      I.click(this.fields.submitButton);
      
    },

    creation_team_fail_missing_team_type(teams_url) {
      I.say('creer une team sans type');
      I.amOnPage(teams_url); 
      I.click(this.fields.createButton);
      I.waitForVisible(this.fields.name, 5);
      I.fillField(this.fields.name, 'test');
      //image here
      I.click(this.fields.submitButton);
      
    },

      editer_une_team(teams_url){
      I.say('editer une team');
      I.amOnPage(teams_url);
      I.click(this.fields.editButton);
  },
      delete_a_team(teams_url){
        I.say('delete une team');
        I.amOnPage(teams_url)
        I.click(this.fields.deleteButton);
        I.click(this.fields.bouttonDeLaConfirmationDeSuppression);
        I.dontSeeElement(this.fields.bouttonDeLaConfirmationDeSuppression);
      }

  }
  