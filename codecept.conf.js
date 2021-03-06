const careerCardUrl = 'https://careercard.4d-ps.com'

global.conf;
conf = {};

conf['login_url'] = careerCardUrl + '/#/';
conf['login_email'] = 'yebega7398@nuesond.com';
conf['login_password'] = 'Admin1234@';
conf['login_email_failed_wrong_format'] = 'yebega7398nuesond.com';
conf['login_password_failed_wrong'] = 'Admin1234';
conf['login_email_failed_wrong_data'] = 'yebega7398@nueson.com';

conf['teams_url'] = careerCardUrl + '/Teams';

exports.config = {
  tests: './tests/*.js',
  output: './output',
  helpers: {
    Puppeteer: {
      show: true,
      headless: true, 
      browser: 'chrome',
      waitForTimeout: 3000,
      restart: true,
      waitForAction: 3000,
      keepBrowserState: false,
      waitForNavigation: ["domcontentloaded", "networkidle0"],
      keepCookies: false,
      chrome: {
        args: ['--lang=en-US,en', '--no-sandbox', '--disable-setuid-sandbox', '--start-maximized'],
        ignoreHTTPSErrors: true,
        defaultViewport: null
      }
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/login_page.js',
    teamsPage: './pages/teams_page.js',
    membersPage: './pages/members_page.js',
    settingsPage: './pages/settings_page.js',
    prizesPage: './pages/prizes_page.js',
    coachingPage: './pages/coaching_page.js',
    reinforcementsPage: './pages/reinforcements_page.js',
    dashboardPage: './pages/dashboard_page.js',

  },
  bootstrap: null,
  mocha: {},
  name: 'test'
}