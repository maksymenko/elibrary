import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './models/book'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(books: Book[], searchText?: string): Book[] {
    if (!books) {
      return [];
    }
    if (!searchText) {
      return books;
    }

    return books.filter(book => {
      return book.id.includes(searchText);
    });

  }
}
