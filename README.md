# DummyJSON Products API Test Suite

The API test framework implemented with TypeScript and Playwright

Test suite to check the DummyJSON Products endpoints.

## 📋 Table of Contents

- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Project Design Decision](#-project-design-decision)
- [Running Tests](#-running-tests)
- [Viewing Test Results](#-viewing-test-results)


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
   npm init
   ```
3. ** Install Playwright test
   ```bash
   npm install -D @playwright/test
   ```
4. **Install Playwright browsers (OPTIONAL:Chromium, Firefox, WebKit > FOR UI TESTING)**
   ```bash
   npx playwright install
   ```
5. **Instead of installing all browsers > Step 4 you can just install necessary dependencies by skipping Step 4**
   ```bash
   npx playwright install-deps
   ```
   
## 📁 Project Structure

```
Deep-Origin-Assignment/
├── baseApi/                 # BaseApi directory here also can be the Controllers class for each endpoint.
│   └── base-api.ts          # Base API class for common HTTP methods, can be extended.
├── constants/               # Constants directory here can be any constants and ENUM for using in whole projects.
│                            # Under the constants directory also can be the endpoints which are used in the tests.
│   └── http-statuses.ts     # HTTP status code constants
├── helpers/                 # helpers directory can be any helper utilities for using in whole projects.
│   └── api-helpers.ts       # API helper utilities. This class is created to implement helper methods to avoid code duplication.
├── json-models/             # Directory for JSON models.
│   ├── create-product-payload.ts   # Create product request payload model
│   └── update-product-payload.ts   # Update product request payload model
├── test-data/               # Directory for test and misc data.
│   └── misc-data.ts         # Test data > Some test data
├── tests/                   # Dirctory to place the test files.
│   └── api/                  # API test. Under tests directory you can create UI or E2E directory for UI tests.
│       └── create-product.spec.ts  # Create product API tests.
│       └── update-products.spec.ts # Update product API tests.
│       └── delete-products.spec.ts # Delete product API tests.
├── test-results/            # Generated test reports (HTML, JSON, XML) - This directory added into .gitignore file.
|                                it will be created after running tests.
├── api.config.ts            # Playwright API test configuration
├── package.json             # Project dependencies and configuration
└── tsconfig.json            # TypeScript configuration file
```

## 🎯 Project Design Decision

Created project is mostly same as a **modular layered architecture** pattern.
**NOTE**
Want to mention that there is no 'Controllers' class as in **modular layered architecture** but it can be added easily.

### Why This Design?

I decided to use this custom architecture because it is the one of the best practices to write API tests.
it is very close to **Page Object Model (POM)** pattern and adapted for API testing.

### ✅ Pros

- **Maintainability** - Changes to API endpoints only require updates in one place (baseApi).
- **Reusability** - Payload models and helpers can be shared across multiple test files.
- **Scalability/Flexibility** - Easy to add new endpoints, test types (UI/E2E), or data models.
- **Readability** - Clear separation makes it easy for new team members to understand the codebase.
- **Principle DRY** - Common logic > reducing code duplication.

## 📋 IMPORTANT
### In the future we can add Controllers class for each endpoint.
### I Have not used the Authorization/Authentication for this project. Because it is not required for this project.
### But it can be implemented easily when it will be required.

### ❌ Cons

- **Initial Overhead** - More boilerplate setup compared to writing tests in a single file
- **Over-engineering Risk** - For small projects, this structure might be excessive
- **Learning Curve** - Team members need to understand the architecture before contributing

### ✅ When this architecture is good:

- Any type and capacity of projects > Medium to large test suites with multiple endpoints
- Teams with multiple contributors.
- Projects requiring long-term maintenance.
- Suites that potentially can be expanded to include UI/E2E tests

## 📋 IMPORTANT 
### For small, single-purpose test suites, a simple structure is often the most efficient approach.
### But, since this is a technical assessment, my focus wasn't on generating a high volume of test cases,
### but rather on demonstrating a clean, simple, extendable and maintainable implementation.

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