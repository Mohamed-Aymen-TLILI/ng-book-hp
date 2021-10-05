import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {BooksService} from './shared/books.service';
import { BooksListComponent } from './pages/books-list/books-list.component';



@NgModule({
  declarations: [BooksListComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
 ],
  exports: [
  BooksListComponent,
  HttpClientModule],
  providers: [
    BooksService
  ]
})
export class BooksModule { }
