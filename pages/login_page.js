const {I} = inject();

module.exports = {

  // setting locators
  fields: {
    email: '#username',
    password: '#password',
    submitButton:'#root > div > div > div > form > div > div > div > div > div.container-mlogin-form-btn > button',
    error_msg: '//*[@id="root"]/div/div/div/form/div/div/div/div/div[1]/div[2]'

  },


  // introducing methods
  login(login_url, login_email, login_password) {
    I.say(`se connecter avec les coordonnees suivants: ${login_email} ${login_password}`);
    I.amOnPage(login_url); 
    I.fillField(this.fields.email, login_email);
    I.fillField(this.fields.password, login_password);
    I.click(this.fields.submitButton);

  },
  
}
