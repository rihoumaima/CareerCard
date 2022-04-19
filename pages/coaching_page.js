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




    }
}