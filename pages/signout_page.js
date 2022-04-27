const {I} = inject();
const assert = require('assert');

module.exports = {

    fields: {
       bouttonDuProfil: '#menu-button-4',
       signoutButton: '#menu-list-4-menuitem-2',

    },
    signout(dashboard_url) { 
        I.say('sign out ');
        I.amOnPage(dashboard_url);
        I.click(this.fields.bouttonDuProfil);
        I.click(this.fields.signoutButton); 
        I.seeElement('#root > div > div > div > form > div > div > div > div > div.container-mlogin-form-btn > button')
    }

    }
