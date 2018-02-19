## Angular TS base client

### Quick start
```
$ npm install
$ ng serve --port=8000 // Start app in debug mode
$ ng build --prod  // Creates bundle ready to deploy
```

### Get started
* Install Angulat CLI, initiate project and heleper dev tool.
```
$ npm install -g @angular/cli
```

* Init project 
```
$ ng new web-client --routing --skip-install
```

* Adding new module, component, service
```
$ ng g module catalog --routing
$ ng g component catalog
$ ng g service catalog/catalog
```

* Add forms support to module, to bind input field with model
```
import { FormsModule } from '@angular/forms'
```





//TODO: add pages and router
 ... https://angular.io/tutorial

### References
* https://angular.io/guide/quickstart
* https://angular.io/tutorial
** totorial sample https://stackblitz.com/angular/xlpymmababa
* https://malcoded.com/posts/angular-beginners-guide
* https://malcoded.com/posts/angular-backend-express
*  websocket, angular  https://medium.com/dailyjs/real-time-apps-with-typescript-integrating-web-sockets-node-angular-e2b57cbd1ec1
