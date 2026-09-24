import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  fullyParallel: false,

  workers: 1,

  timeout: 30000,

  retries: 0,

  reporter: [
    ['html'],
    ['allure-playwright', { resultsDir: 'allure-results' }],
    ['json', { outputFile: 'results.json' }]
  ],

  use: {
    headless: process.env.CI === 'true',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'firefox',
      use: {
        browserName: 'firefox'
      },
    },
  ],

});