// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = defineConfig({
  testDir: './playwright-pom-demo/tests',
  timeout: 30000,
  retries: 0,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-pom-demo/reports/html-report', open: 'never' }],
    ['allure-playwright', { outputFolder: 'playwright-pom-demo/reports/allure-results' }]
  ],

  projects: [
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        baseURL: 'https://rahulshettyacademy.com/loginpagePractise/',
        headless: false,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
      },
    },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'https://rahulshettyacademy.com/loginpagePractise/',
        headless: false,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
      },
    },
  ],
});

module.exports = config;
