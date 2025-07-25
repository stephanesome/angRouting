import {Component, inject} from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AuthorEntity, BookEntity} from '../books/model/book-entity';
import {BooksService} from '../books/service/books-service';

function categoryValidator(control: FormControl<string>): { [s: string]: boolean } | null {
  const validCategories = ['Kids', 'Tech', 'Cook'];
  if (!validCategories.includes(control.value)) {
    return {invalidCategory: true};
  }
  return null;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.html',
  styleUrls: ['./admin.css'],
  imports: [FormsModule, ReactiveFormsModule]
})
export class Admin {
  private builder: FormBuilder = inject(FormBuilder);
  private booksService: BooksService = inject(BooksService);
  bookForm = this.builder.group({
    id: ['', [Validators.required, Validators.pattern('[1-9]\\d{3}')]],
    category: ['', [Validators.required, categoryValidator]],
    title: ['', Validators.required],
    cost: ['', [Validators.required, Validators.pattern('\\d+(\\.\\d{1,2})?')] ],
    authors: this.builder.array([]),
    year: [''],
    description: ['']
  });

  get id(): AbstractControl<string> {return <AbstractControl>this.bookForm.get('id'); }
  get category(): AbstractControl<string> {return <AbstractControl>this.bookForm.get('category'); }
  get title(): AbstractControl<string> {return <AbstractControl>this.bookForm.get('title'); }
  get cost(): AbstractControl<string> {return <AbstractControl>this.bookForm.get('cost'); }
  get authors(): FormArray {
    return this.bookForm.get('authors') as FormArray;
  }

  onSubmit(): void {
    const book =  new BookEntity(Number(this.bookForm.value.id),
      <string>this.bookForm.value.category,
      <string>this.bookForm.value.title,
      Number(this.bookForm.value.cost),
      <AuthorEntity[]>this.bookForm.value.authors,
      Number(this.bookForm.value.year),
      <string>this.bookForm.value.description);
    this.booksService.addBook(book);
    this.bookForm.reset();
    this.authors.clear();
  }

  addAuthor(): void {
    this.authors.push(
      this.builder.group({
        firstName: [''],
        lastName: ['']
      })
    );
  }

  removeAuthor(i: number): void {
    this.authors.removeAt(i);
  }
}

