const {I} = inject();
const assert = require('assert');

module.exports = {

    fields: {
        createPrizeButton: '#root > div > div > div.css-jfo9gg > div > div > div.sc-eSxRXt.fGVxwu > a > div > label > button > span.MuiButton-label',
        dropdownlistType: 'Type',
        dropdownlistTeam: 'Team',
        name: 'name',
        points: 'points',
        choisirUnFIchier: 'image',
        bouttonDeLaConfirmationDeLaCreation: 'Create',
    },

    createPrizePass(prizes_url){
        I.say('create a prize');
        I.amOnPage(prizes_url);
        I.click(this.fields.createPrizeButton);
        I.selectOption(this.fields.dropdownlistType,'Company');
        I.selectOption(this.fields.dropdownlistTeam,'');//il te faut le nom du team 
        I.fillField(this.fields.name,'test');
        I.fillField(this.fields.points,'10');
        //image here
        I.click(this.fields.bouttonDeLaConfirmationDeLaCreation)
    },
    createPrizeWithoutName(prizes_url){
        I.say('create a prize without name');
        I.amOnPage(prizes_url);
        I.click(this.fields.createPrizeButton);
        I.selectOption(this.fields.dropdownlistType,'Company');
        I.selectOption(this.fields.dropdownlistTeam,'');//il te faut le nom du team 
        I.fillField(this.fields.points,'10');
        //image here
        I.click(this.fields.bouttonDeLaConfirmationDeLaCreation);
        const erreur = await I.grabTextFrom()//le selecteur du msg d erreur
        assert.equal(erreur,'')//le msg d erreur
    },
    createPrizeWithoutFile(prizes_url){
        I.say('create a prize without file');
        I.amOnPage(prizes_url);
        I.click(this.fields.createPrizeButton);
        I.selectOption(this.fields.dropdownlistType,'Company');
        I.selectOption(this.fields.dropdownlistTeam,'');//il te faut le nom du team 
        I.fillField(this.fields.name,'test');
        I.fillField(this.fields.points,'10');
        I.click(this.fields.bouttonDeLaConfirmationDeLaCreation);
        const erreur = await I.grabTextFrom()//le selecteur du msg d erreur
        assert.equal(erreur,'')//le msg d erreur


    }

}