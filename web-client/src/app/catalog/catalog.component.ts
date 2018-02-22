import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private catalogService: CatalogService) { }

  ngOnInit() {
    this.catalogService.getCatalog().subscribe(books => {
      this.catalog = books;
    });
    this.route.params.subscribe((params) => {
      this.catalogService.getBook(params.isbn).subscribe(book => {
        this.selectedBook = book;
      });
      console.log(params.isbn);
    });
  }

  addBook(book: Book) {
    console.log(">>> new book added");
    this.newBook = new Book();
  }
}
