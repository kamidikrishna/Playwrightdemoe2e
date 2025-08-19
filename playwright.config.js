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
        headless: process.env.CI ? true : false, // 👈 headless in CI, headed locally
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        baseURL: 'https://rahulshettyacademy.com/loginpagePractise/',
      },
    },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        headless: false, // always headed locally
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        baseURL: 'https://rahulshettyacademy.com/loginpagePractise/',
      },
    },
  ],
});

module.exports = config;
