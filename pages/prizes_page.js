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
        erreurNameMsg: '#root > div > div > div.css-jfo9gg > form > div > div:nth-child(1) > span:nth-child(8)',
        erreurfileMsg: '#root > div > div > div.css-jfo9gg > form > div > div:nth-child(1) > span:nth-child(13)' 
    },

    createPrizePass(prizes_url){
        I.say('create a prize');
        I.amOnPage(prizes_url);
        I.click(this.fields.createPrizeButton);
        I.selectOption(this.fields.dropdownlistType,'Company');
        I.selectOption(this.fields.dropdownlistTeam,'QA team 1');
        I.fillField(this.fields.name,'test');
        I.fillField(this.fields.points,'10');
        //image here
        I.click(this.fields.bouttonDeLaConfirmationDeLaCreation);
        I.refreshPage(prizes_url);
        I.seeElement(this.fields.name)
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
        const erreur = await I.grabTextFrom(this.fields.erreurNameMsg)
        assert.equal(erreur,'The prize name is Required')
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
        const erreur = await I.grabTextFrom(this.fields.erreurfileMsg)
        assert.equal(erreur,'A file is required')


    }

}