// @ts-check
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './playwright-pom-demo/tests',   // 👈 your test folder
  timeout: 30000,
  retries: 0,
  reporter: [
  ['list'],
  ['html', { outputFolder: 'playwright-pom-demo/reports/html-report', open: 'never' }],
  ['allure-playwright', { outputFolder: 'playwright-pom-demo/reports/allure-results' }]
],


  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://rahulshettyacademy.com/loginpagePractise/',
    browserName: 'chromium'
  },
};

module.exports = config;
