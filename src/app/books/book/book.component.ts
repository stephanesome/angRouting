import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../model/book';
import {BooksService} from '../service/books.service';
import { AuthornamesPipe } from '../../pipes/authornames.pipe';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css'],
    standalone: true,
    imports: [NgIf, AuthornamesPipe]
})
export class BookComponent implements OnInit {
  selectedBook!: Book;
  private route: ActivatedRoute = inject(ActivatedRoute);
  private booksService: BooksService = inject(BooksService);

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.selectedBook = this.booksService.getBook(id);
    });
  }
}
