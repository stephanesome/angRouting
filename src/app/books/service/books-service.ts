import { Injectable } from '@angular/core';
import {AuthorEntity, BookEntity} from '../model/book-entity';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books = [
    new BookEntity(1001, 'Tech', 'Introduction to Angular', 50.25, [new AuthorEntity('Bob', 'T')], 2017),
    new BookEntity(1002, 'Tech', 'Angular Advanced Concepts', 125.95, [new AuthorEntity('Zorb', 'Tar')], 2019),
    new BookEntity(1003, 'Kids', 'A Fantastic Story', 12.25, [new AuthorEntity('Jane', 'C'), new AuthorEntity('Tala', 'Tolo')], 2009),
    new BookEntity(1004, 'Cook', 'The Best Shawarmas', 18.99, [new AuthorEntity('Chef', 'Z')], 1978),
    new BookEntity(1005, 'Tech', 'Angular Demystified', 210.50, [new AuthorEntity('Zorb', 'Tar')], 2020)
  ];

  public getBook(id: string): BookEntity {
    return <BookEntity>this.books.find(book => book.id === Number.parseInt(id));
  }

  public addBook(b: BookEntity): void {
    this.books.push(b);
  }
}
