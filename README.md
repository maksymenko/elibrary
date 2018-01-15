## REST API wit Express + TypeSript

### Server quick start
```
$ cd ./server
$ tsc
$ node dist/apiserver.js
$ curl http://localhost:8000/api/books; line;
```



* Initiate project
```
$ npm init
```
* Add `express` framework dependency
```
$ npm install express --save
$ npm install cors --save
```



### Resources
* unit tests https://journal.artfuldev.com/unit-testing-node-applications-with-typescript-using-mocha-and-chai-384ef05f32b2
* spec https://github.com/Microsoft/TypeScript/blob/376534981220fbbfee39ae97299aafe0d9c473ce/doc/spec.md#11.3.3
* sample https://github.com/Microsoft/TypeScriptSamples/blob/f206e7ca3e0f605ee5ec8f9b30894881dbe4c462/imageboard/app.ts
* https://malcoded.com/posts/angular-backend-express
* http://brianflove.com/2016/11/08/typescript-2-express-node/ 
* http://brianflove.com/2016/11/11/typescript-2-express-mongoose-mocha-chai/