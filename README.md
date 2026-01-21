# DummyJSON Products API Test Suite

The API test suite implemented with TypeScript and Playwright to check the DummyJSON Products endpoints.

## 📋 Table of Contents

- [Installation](#installation)
- [Running Tests](#running-tests)
- [Viewing Test Results](#viewing-test-results)

## 🚀 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm

### Setup Project

1. **Clone the repository**
   ```bash
   git clone https://github.com/gev0201/Deep-Origin-Assignment
   cd Deep-Origin-Assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
3. ** Install Playwright test
   ```bash
   npm install -D @playwright/test
   ```
4. **Install Playwright browsers (Chromium, Firefox, WebKit > FOR UI TESTING)**
   ```bash
   npx playwright install
   ```

## 🏃 Running Tests

### Run All Tests

```bash
npm run tests:api
```

### Run Specific Test Files or Tests

```bash
# Run specific test file
npx playwright test --config=api.config.ts tests/api/create-product.spec.ts
```

[//]: # (TODO: NEED TO ADD PROJECT STRUCTURE)
[//]: # (TODO: NEED TO ADD DESIGN DECISIONS & TRADEOFFS)

## 📊 Viewing Test Results

### HTML Report

After finishing test run, view the HTML report:

```bash
npx playwright show-report test-results/html-report
```

The HTML report provides:
- Test execution timeline
- Detailed error messages
- Request/response details

### JSON Report

JSON results are saved to:
- `test-results/results.json`

### JUnit Report

XML results > For CI/CD integration:
- `test-results/results.xml`

## 📝 License

ISC License - see LICENSE file for details.
