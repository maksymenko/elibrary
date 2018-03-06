import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing'
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { FilterPipe } from './filter.pipe';
import { DetailsComponent } from './details/details.component';
import { CatalogComponent } from './catalog.component';
import { CatalogService } from './catalog.service';
import { Catalog } from './models/catalog';
import { Book } from './models/book';

import { HttpClient } from '@angular/common/http';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


class MockCatalogService {
  getCatalog() { }
  getBook(isbn: string) { }
}

describe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;
  class MockActivatedRoute {
    params = Observable.of([]);;
  }

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('CatalogService', ['getCatalog', 'getBook']);

    let catalogServiceSpy = jasmine.createSpyObj('catalogServiceSpy', ['getCatalog', 'getBook']);
    let book: Book = new Book();
    book.id = 'id1';
    book.isbn = 'isbn';
    book.author = 'author'; 
    book.title = 'title';

    let catalog: Catalog = { books: [book] };
    catalogServiceSpy.getBook.and.returnValue(
      Observable.of(book)
    );

    catalogServiceSpy.getCatalog.and.returnValue(
      Observable.of(catalog)
    );


    TestBed.configureTestingModule({
      providers: [
        HttpClientModule,
        { provide: CatalogService, useValue: catalogServiceSpy },
        { provide: ActivatedRoute, useClass: MockActivatedRoute }],
      declarations: [CatalogComponent, DetailsComponent, FilterPipe],
      imports: [HttpModule, HttpClientModule, FormsModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
