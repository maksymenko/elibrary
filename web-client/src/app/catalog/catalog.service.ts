import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Catalog } from './catalog';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CatalogService {

  constructor(private http: HttpClient) { }

  getCatalog(): Observable<Catalog> {
    return this.http.get<Catalog>('http://localhost:3000/api/books');
  }
}
