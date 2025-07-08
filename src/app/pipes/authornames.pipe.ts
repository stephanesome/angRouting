import { Pipe, PipeTransform } from '@angular/core';
import {AuthorEntity} from '../books/model/book-entity';

@Pipe({
    name: 'authornames',
    standalone: true
})
export class AuthornamesPipe implements PipeTransform {

  transform(value: AuthorEntity[] | undefined): string {
    if (value === undefined) return '';
    return value.map((author) => `${author.firstName}, ${author.lastName}`).join(' <b>and</b> ');
  }
}
