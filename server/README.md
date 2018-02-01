## REST API wit Express + TypeSript

### Server quick start
```
$ npm install
$ npm run build
$ npm run start
$ curl http://localhost:3000/api/books; line;
```

### Test
```
$ npm run test
```

### Server debug
```
$ npm run debug
```

### Steps
* Initiate project, configure TypeScript and setup debug environment
```
$ npm init  // initialize nodejs project
$ npm install typescript --save-dev
$ npm install @types/node --save-dev
$ npx tsc --init  // configure TypeScript
// setun debugging env (compile and run)
$ npm install ts-node --save-dev
$ npm install nodemon --save-dev
```

* Adding REST framework dependencies
```
$ npm install express --save
$ npm install cors --save
```

* Add POST body parser
```
npm install body-parser --save
```

* Adding test
```
$ npm install chai chai-http mocha ts-node @types/chai @types/chai-http @types/mocha --save-dev
```

> mocha - is test framework 
> chai - assertion framework


#### References
* setup project https://basarat.gitbooks.io/typescript/docs/quick/nodejs.html
* unit test in TypeScript https://journal.artfuldev.com/unit-testing-node-applications-with-typescript-using-mocha-and-chai-384ef05f32b2
* nodejs tutorial https://blog.risingstack.com/node-hero-node-js-unit-testing-tutorial/
* http test https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai
  * https://github.com/chaijs/chai-http
* http://brianflove.com/2016/11/08/typescript-2-express-node/ 