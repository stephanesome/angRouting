import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {BooksComponent} from './books/books.component';
import {BookComponent} from './books/book/book.component';

const booksRoutes: Routes = [
  {path: ':id', component: BookComponent}
];

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'books', component: BooksComponent,
    children: booksRoutes
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: HomeComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
