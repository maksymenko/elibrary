## Angular TS base client

### Quick start
```
$ npm install
$ ng serve --port=8000 // Start app in debug mode
$ ng build --prod  // Creates bundle ready to deploy
```

### Get started with project implementation
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
$ ng g component catalog --module=mylist
$ ng g service catalog/catalog --module=catalog
```
> Components cointains app prefix in name. By default `app` e.g. componet `details` looks like thin in htmlk page
> `app-details`


* **Add forms support** to module, to bind input field with model
```
import { FormsModule } from '@angular/forms'
```

* Passing attr to component

Template `<app-details [book]="selectedBook"></app-details>`
 
Component `@Input() book: Book;`


* bind input field and model
```
<input [(ngModel)]="newBook.title"  placeholder="Title">
```

* Event binding 
```
 <button (click)="catalogService.getCatalog()"></button>
 ```

> ngOnInit life cycle hook method, called when component inctance constructed.

*  **Adding service**
```
$ ng g service catalog/catalog --module=catalog
```

`HttpClient.get` returns `Observable` from RxJS then component can subscribe `Observable.subscribe()`,


* **Adding routing**
Keep route definition in separate module. And import to main  module.
`ActivatedRoute` is used to get access to URL parameters.
```
import { ActivatedRoute } from '@angular/router';
constructor(private route: ActivatedRoute, ...) {}
```
Define route
```
{ path: 'catalog/:id', component: CatalogComponent },
```

Get URL parameter:
```
this.route.snapshot.paramMap.get('id')
```




#### Notes
* 3 types of Directives : Components, Structural Directives, Attribute Directives
* Decorators is used to define metadata for components and fields (@Component, @Input, ets)


---
//TODO: add pages and router
 ... https://angular.io/tutorial    `8 http`

### References
* https://angular.io/guide/quickstart
* https://angular.io/tutorial
** totorial sample https://stackblitz.com/angular/xlpymmababa
* https://malcoded.com/posts/angular-beginners-guide
* https://malcoded.com/posts/angular-backend-express
*  websocket, angular  https://medium.com/dailyjs/real-time-apps-with-typescript-integrating-web-sockets-node-angular-e2b57cbd1ec1
