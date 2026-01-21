import { PlaywrightTestConfig } from "@playwright/test";
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testDir: './tests/api',
    fullyParallel: true,
    timeout: 50000,
    reporter: [
        ['html', { outputFolder: 'test-results/html-report', open: 'never' }],
        ['json', { outputFile: 'test-results/results.json' }],
        ['junit', { outputFile: 'test-results/results.xml' }],
        ['list']
    ],
    expect: {
        timeout: 10000
    },
    use: {
        baseURL: 'https://dummyjson.com',
        trace: 'on-first-retry',
        actionTimeout: 10000,
        ignoreHTTPSErrors: true,
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        },
    ],
};

export default config;
