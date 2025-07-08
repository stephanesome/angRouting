import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookEntity} from '../model/book-entity';
import {BooksService} from '../service/books-service';
import { AuthornamesPipe } from '../../pipes/authornames.pipe';

@Component({
  selector: 'app-book',
  templateUrl: './book.html',
  styleUrls: ['./book.css'],
  imports: [AuthornamesPipe]
})
export class Book implements OnInit {
  selectedBook!: BookEntity;
  private route: ActivatedRoute = inject(ActivatedRoute);
  private booksService: BooksService = inject(BooksService);

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.selectedBook = this.booksService.getBook(id);
    });
  }
}
