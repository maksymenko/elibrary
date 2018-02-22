import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Catalog } from './models/catalog';
import { Observable } from 'rxjs/Observable';
import { Book } from './models/book';

@Injectable()
export class CatalogService {

  constructor(private http: HttpClient) { }

  getCatalog(): Observable<Catalog> {
    return this.http.get<Catalog>('http://localhost:3000/api/books');
  }

  getBook(isbn: string): Observable<Book> {
    return this.http.get<Book>('http://localhost:3000/api/books/' + isbn);
  }
}
