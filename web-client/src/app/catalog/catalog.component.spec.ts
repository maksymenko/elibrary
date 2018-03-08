import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { CatalogService } from './catalog.service';
import { Catalog } from './models/catalog';
import { Book } from './models/book';
import { DetailsComponent } from './details/details.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { RouterTestingModule } from '@angular/router/testing'


describe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;

  const book: Book = new Book();
  book.id = 'id1';
  book.isbn = 'isbn';
  book.author = 'author';
  book.title = 'title';

  const catalog: Catalog = { books: [book] };

  beforeEach(async(() => {
    let activatedRoute: ActivatedRoute = new ActivatedRoute();
    activatedRoute.params = Observable.of({ isbn: 'isbn' });

    const catalogServiceSpy = jasmine.createSpyObj(
      'catalogServiceSpy',
      ['getCatalog', 'getBook']);

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
        { provide: ActivatedRoute, useValue: activatedRoute }],
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
    expect(component.selectedBook).toEqual(book);
    expect(component.filteredBooks).toEqual([book]);
  });
});
