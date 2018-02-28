import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map, filter } from 'rxjs/operators';
import { CatalogService } from './catalog.service';
import { Catalog } from './models/catalog';
import { Book } from './models/book';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  catalog: Catalog = { books: [] };
  newBook: Book = new Book();
  selectedBook: Book;
  books$: Observable<Book[]>;
  filteredBooks: Book[];


  constructor(private route: ActivatedRoute, private catalogService: CatalogService) { }

  ngOnInit() {
    this.catalogService.getCatalog().subscribe(books => {
      this.catalog = books;
      this.filteredBooks = books.books;
    });
    this.books$ = this.catalogService.getCatalog().pipe(
      map((cat: Catalog) => cat.books)
    );
    this.route.params.subscribe((params) => {
      this.catalogService.getBook(params.isbn).subscribe(
        book => { this.selectedBook = book; },
        err => console.log('>>> component error: ' + JSON.stringify(err)));
      console.log(params.isbn);
    });
  }

  addBook(book: Book) {
    console.log(">>> new book added: " + JSON.stringify(book));
    this.newBook = new Book();
  }

  search(filter: string) {
    this.filteredBooks = this.catalog.books;
    if (filter.length > 0) {
      this.filteredBooks = this.filteredBooks.filter(b => {
        return b.id.indexOf(filter) > 0;
      });
    }
  }
}
