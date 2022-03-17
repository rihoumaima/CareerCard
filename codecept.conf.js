exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      show: true,
      browser: 'chrome',
      waitForTimeout: 3000,
      restart: true,
      waitForAction: 3000,
      keepBrowserState: false,
      waitForNavigation: ["domcontentloaded", "networkidle0"],
      keepCookies: false,
      chrome: {
        args: ['--lang=en-US,en', '--no-sandbox', '--disable-setuid-sandbox', '--window-size=1800,1000'],
        ignoreHTTPSErrors: true,
        defaultViewport: {
          "width": 1800,
          "height": 1000
        }
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'test'
}