const {I} = inject();

module.exports = {

    fields: {
      createButton: 'Create Team',
      submitButton: 'Create Team',
      name: '#name',
      teamTypeButton: '//*[@id="chakra-modal--body-6"]/form/div/div[3]/label[2]/span[2]',
    },
  
    creation_team_pass(teams_url) {
      I.say('creer une team  ');
      I.amOnPage(teams_url); 
      I.click(this.fields.createButton);
      I.waitForVisible(this.fields.name, 5);
      I.fillField(this.fields.name, 'test');
      I.click(this.fields.teamTypeButton);
      I.click(this.fields.submitButton);
      
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

  }
  