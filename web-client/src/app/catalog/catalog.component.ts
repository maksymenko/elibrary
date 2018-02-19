import { Component, OnInit } from '@angular/core';
import { CatalogService } from './catalog.service';
import { Catalog } from './catalog';
import { Book } from './book';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  catalog: Catalog = { books: [] };
  newBook: Book = new Book();
  selectedBook: Book;
  constructor(private catalogService: CatalogService) { }

  ngOnInit() {
    this.catalogService.getCatalog().subscribe(books => {
      this.catalog = books;
    });
  }

  onSelect(book: Book): void{
    this.selectedBook = book;
  }

  addBook(book: Book) {
    console.log(">>> new book added");
    this.newBook = new Book();
  }
}
