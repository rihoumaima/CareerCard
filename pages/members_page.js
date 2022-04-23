const {I} = inject();
const assert = require('assert');

module.exports = {

    fields: {
        searchButton: 'Search',
        deleteButton: '#root > div > div > div.css-jfo9gg > div > div > div.sc-jEieoE.sc-cCKzRf.kJEuVs.goqJzK > div > div.jss12 > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(6) > div > div > label > button > span.MuiButton-label > span > svg > path',
        refreshButton: '#root > div > div > div.css-jfo9gg > div > div > div.sc-jEieoE.sc-cCKzRf.kJEuVs.goqJzK > div > div.MuiToolbar-root.MuiToolbar-regular.jss5.MuiToolbar-gutters > div.jss8 > div > div > span:nth-child(2) > button > span.MuiIconButton-label > svg',

    },
    deleteMember(members_url){
        I.say("supprimer un membre");
        I.amOnPage(members_url);
        I.click(this.fields.deleteButton); 
        I.click(this.fields.refreshButton); 
        I.dontSeeElement(this.fields.deleteButton); 

    },

    searchingForAMember(members_url){
        I.say('searching for a member');
        I.amOnPage(members_url);
        I.fillField(this.fields.searchButton,'jhon');
        I.wait(3);
        I.dontSeeElement(this.fields.deleteButton);
      

    }


}