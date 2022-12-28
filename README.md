# Angular-POC-main
NGRX Angular App

Updates -

- Corrected existing Unit test cases. Most of it were failing reason being incorrect/missing dependency imports & providers

- Added heading Unit test case to header component instead of app component

- Mocked an observable in create-post component and added the test case (Jasmine) for the same. Also, have added the test case for the same using Jest but couldn't execute as the configuration is conflicting with Cypress and Jasmine. So as an alternative, I have execeuted the same test case on an online compiler and attached the screenshot of the same - "Jest Testcase.png"

- Added Cypress and configured it to be used as E2E and Component specific.
    - Added the script in package.json to open cypress dashboard.
    - Choose E2E testing and select Flow1.spec.cy.ts

