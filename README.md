To run the project execute the `npm i` or `yarn` command.

After that execute `npm start` or `yarn start` command to run the local server on http://localhost:8080/.

To check the code for compliance with the eslint rules you can execute `npm run lint` or `yarn lint` command.
This will list syntax errors, if any.

Also, you can test the application with Playwright. To do this, execute the `npm run test` or `yarn test` command.
It will run e2e tests in Chromium. To rin a separate test execute `yarn test tests/favourites.spec.js`
or `npm run test tests/favourites.spec.js` command.
