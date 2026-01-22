import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    testDir: './tests/api',
    testMatch: '**/*.spec.ts',
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
        extraHTTPHeaders: {
            'Content-Type': 'application/json',
        },
        trace: 'on-first-retry',
        actionTimeout: 10000,
        ignoreHTTPSErrors: true,
    },
};
export default config;
