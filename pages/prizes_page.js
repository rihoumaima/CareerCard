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
        erreurfileMsg: '#root > div > div > div.css-jfo9gg > form > div > div:nth-child(1) > span:nth-child(13)',
        deleteButton: '#root > div > div > div.css-jfo9gg > div.sc-guNdNy.sc-hilbJV.kgChRm.gkkiVs > div > div.jss3136 > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(7) > div > div:nth-child(2) > label > button > span.MuiButton-label > span > svg',
        bouttonDeLaConfirmationDeSuppression: '#chakra-modal--body-10 > footer > button.chakra-button.css-pu8osu',
        editButton: '#root > div > div > div.css-jfo9gg > div.sc-guNdNy.sc-hilbJV.kgChRm.gkkiVs > div > div.jss16 > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(7) > div > div:nth-child(1) > label > button > span.MuiButton-label > span > svg',
        editPrizeName: '#name',
        editPrizePoints: '#points',
        submitEdit: '#chakra-modal--body-10 > form > button',
        dropdownlistType: '#root > div > div > div.css-jfo9gg > div.chakra-stack.css-qnnbul > div:nth-child(1) > div.css-u1jr60 > div > select',
        dropdownlistTeam: '#root > div > div > div.css-jfo9gg > div.chakra-stack.css-qnnbul > div:nth-child(2) > div.css-r8tbpf > div > div.css-mt2q39 > div.css-o38mw0 > div.css-5p3ihh',
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
    },
    createPrizeWithoutFile(prizes_url){
        I.say('create a prize without file');
        I.amOnPage(prizes_url);
        I.click(this.fields.createPrizeButton);
        I.selectOption(this.fields.dropdownlistType,'Company');
        I.selectOption(this.fields.dropdownlistTeam,'QA team'); 
        I.fillField(this.fields.name,'test');
        I.fillField(this.fields.points,'10');
        I.click(this.fields.bouttonDeLaConfirmationDeLaCreation);
    },
    deleteprize(manageReinforcements_url){
        I.say('delete a reinforcement');
        I.amOnPage(manageReinforcements_url)
        I.click(this.fields.deleteButton);
        I.click(this.fields.bouttonDeLaConfirmationDeSuppression);
        I.dontSeeElement(this.fields.deleteButton);
      },
      editPrize(prizes_url){
        I.say('edit a prize');
        I.amOnPage(prizes_url);
        I.click(this.fields.editButton);
        I.click(this.fields.editPrizeName);
        I.pressKey('Backspace');
        I.wait(5)
        I.fillField(this.fields.editPrizeName,'test');
        I.click(this.fields.editPoints);
        I.pressKey('Backspace');
        I.wait(5)
        I.fillField(this.fields.editPrizePoints,'10');
        //image
        I.click(this.fields.submitEdit);
        I.refreshPage(prizes_url);
        I.seeElement(this.fields.editPrizeName);
    },
    searchingForAprize(prizes_url){
        I.say('searching for a prize');
        I.amOnPage(prizes_url);
        I.fillField(this.fields.searchButton,'test5');
        I.wait(3);
        I.dontSeeElement(this.fields.deleteButton);
    },
    prizeFiltre(prizes_url){//avant ce filtre faut creer 2 teams avec 2 types differents(company et family)
        I.amOnPage(prizes_url);
        I.selectOption(this.fields.dropdownlistType,'Company');
        I.wait(3);
        I.selectOption(this.fields.dropdownlistTeam,'QA team 1');
        I.dontSee('family')
        I.dontSee('Team leaders3');


    }



}