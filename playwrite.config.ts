import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false,
    baseURL: 'https://www.goibibo.com',
    
    screenshot: 'only-on-failure',
    video: 'on-first-retry'
  },
});