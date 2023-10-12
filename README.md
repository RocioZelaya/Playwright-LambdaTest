# Playwright-LambdaTest: Automated UI Testing

This project demonstrates how to perform automated UI testing using [Playwright](https://playwright.dev/). It includes three exercises to showcase various testing scenarios.

## Installation

1. Clone this repository:

```bash
git clone https://RocioZelaya/Playwright-LambdaTest.git
cd your-playwright-project
npm install
```

2. Install Playwright and dependencies:

```bash
npx playwrigt install
npx playwright install-deps 
```

## Running the Tests
Before running the tests please configure your credentials to connect with LambdaTest on the following path: playwright-sample/playwright-test-js/lambdatest-setup.js
inside the user and accesKey properties.

the tests directory can be found in this path: playwright-sample/playwright-test-js/tests

You can now execute the tests using npm. Ensure you have configured the playwright.config.js file appropriately.

```bash
npm test
```
Once you input this command you can watch the execution from the LambdaTest Dashboard.
