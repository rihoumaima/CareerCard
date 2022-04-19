const {I} = inject();
const assert = require('assert');

module.exports = {

    fields: {
        searchButton: 'Search'


    },
    deleteMember(members_url){
        I.say("supprimer un membre");
        I.amOnPage(members_url);
        I.click(''); //clicker sur le boutton delete
        I.click(''); // refresh button
        I.dontSeeElement(''); //on teste si le boutton delete n est plus visible

    },

    searchingForAMember(members_url){
        I.say('searching for a member');
        I.amOnPage(members_url);
        I.fillField(this.fields.searchButton,);//ce que tu veux chercher 
      

    }


}