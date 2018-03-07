import { TestBed, inject } from '@angular/core/testing';
import { CatalogService } from './catalog.service';
import { HttpClient } from '@angular/common/http';
import { asyncData } from '../testing/async-observable-helpers'
import { Book } from './models/book';
import { Catalog } from './models/catalog';


describe('CatalogService', () => {

  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj(
      'httpClientSpy',
      ['get']);
    TestBed.configureTestingModule({
      providers: [CatalogService,
        { provide: HttpClient, useValue: httpClientSpy }]
    });
  });

  it('should be created', inject([CatalogService], (service: CatalogService) => {
    httpClientSpy.get.and.returnValue(asyncData({ books: [] }));
    expect(service).toBeTruthy();

    service.getCatalog().subscribe((catalog: Catalog) => {
      expect(catalog.books.length).toEqual(0);
    });

    expect(httpClientSpy.get).toHaveBeenCalledWith('http://localhost:3000/api/books');
  }));
});
