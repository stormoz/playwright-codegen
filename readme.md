# Sample project to generate and run Playwright tests

NB: this approach is good as an introduction to browser automation for a team that is not used to it.

## Prerequisites
- Install Node Js: https://nodejs.org/en
- Run in terminal (to validate the install): `npx --version`
- Pull this repository (copy code)
- Run in terminal at the root folder of the cloned repository:
  - `npx playwright install`
  - `npm install`

## Recording tests
- Run in terminal (to start test recorder/generator): `npx playwright codegen https://example.com` (where https://example.com is your web application url)
  - It starts two Chromium windows: browser and recorder
  - Arrange the windows so you can see both windows
  - NB: recording starts automatically
- Start testing activities in the browser window (you should see elements highlighting if recording is working properly)
- Use "Assert value" button for assertions as required
- Once done the recording, copy the generated JS code from the recorder window to clipboard
- Create a file with a name explaining a test case (consider organising by feature folders, e.g. tests/my-feature1/my-scenario.test.js), and paste the previously copied test code into the file, save the file
- NB: when doing this, keep in mind repeatability e.g. if you already created one test with a piece of data that does not allow you to do it again, then you may not be able to re-run the test without changing the inputs again

## Run tests
- Run in terminal at the root folder of the cloned repository: `npm test`


## Learn about Playwright Codegen and Playwright
- https://playwright.dev/docs/codegen
- https://playwright.dev
