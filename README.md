## REST API wit Express + TypeSript

### Server quick start
```
$ cd ./server
$ npm install
$ npm run build
$ npm run start
$ curl http://localhost:8000/api/books; line;
```

### Server debug
```
$ npm run debug
```

### Steps
* Initiate project, configure TypeScript and setupr debug environment
```
$ npm init  // initialize nodejs project
$ npm install typescript --save-dev
$ npm install @types/node --save-dev
$ npx tsc --init  // configure TypeScript
// compile and run
$ npm install ts-node --save-dev
$ npm install nodemon --save-dev
```


* Add REST framework dependencies
```
$ npm install express --save
$ npm install cors --save
```

// TODO: unit test


### Resources
* unit tests https://journal.artfuldnode monev.com/unit-testing-node-applications-with-typescript-using-mocha-and-chai-384ef05f32b2
* websocket, angular https://medium.com/dailyjs/real-time-apps-with-typescript-integrating-web-sockets-node-angular-e2b57cbd1ec1
* spec https://github.com/Microsoft/TypeScript/blob/376534981220fbbfee39ae97299aafe0d9c473ce/doc/spec.md#11.3.3
* sample https://github.com/Microsoft/Typenode monScriptSamples/blob/f206e7ca3e0f605ee5ec8f9b30894881dbe4c462/imageboard/app.ts
* https://malcoded.com/posts/angular-backend-express
* http://brianflove.com/2016/11/08/typescript-2-express-node/ 
* http://brianflove.com/2016/11/11/typescript-2-express-mongoose-mocha-chai/

#### TypeScript
* https://blog.risingstack.com/building-a-node-js-app-with-typescript-tutorial/
* TypeScript git book https://basarat.gitbooks.io/typescript/content/docs/tips/defaultIsBad.html
* (nodemon) nodejs TypeScript setup project https://basarat.gitbooks.io/typescript/docs/quick/nodejs.html 
* nodejs proj structure and full tutorial https://blog.risingstack.com/node-hero-node-js-project-structure-tutorial/
