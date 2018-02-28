import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import { Catalog } from './models/catalog';
import { Observable } from 'rxjs/Observable';
import { Book } from './models/book';

@Injectable()
export class CatalogService {

  constructor(private http: HttpClient) { }

  getCatalog(): Observable<Catalog> {
    return this.http.get<Catalog>('http://localhost:3000/api/books')
      .pipe(
      tap(data => console.log('>> tap data: ' + JSON.stringify(data))),
      catchError(err => {
        console.log('>>> catch error: ' + JSON.stringify(err));
        return Observable.throw(err);
      }));
  }

  getBook(isbn: string): Observable<Book> {
    return this.http.get<Book>('http://localhost:3000/api/books/' + isbn);
  }
}
