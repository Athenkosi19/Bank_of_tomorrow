# Bank of tomorrow

### Getting started

- Open your terminal and run `npm install` to add the testing library
- Run `npm run test:watch` to run the tests in watch mode. This will re-run the tests for any code changes you make.
- if you want to run just your bank file for some reason you can run `npm start`.
- To debug you can use the **version control** tab on the left pane in vs code.

### TODO list

- Fix return message if user tries to deposit an amount less than or equal to zero. At the moment it says insufficient funds, this is not appropriate.

```javascript
deposit(accountNumber, -1000000);
// TODO: fix message so it is meaningful
```
