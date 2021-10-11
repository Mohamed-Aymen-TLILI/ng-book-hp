import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {BooksService} from './shared/books.service';
import { BooksListComponent } from './pages/books-list/books-list.component';
import { BookComponent } from './pages/book/book.component';
import { LimitPipe } from './pages/book/limit.pipe';



@NgModule({
  declarations: [BooksListComponent, BookComponent, LimitPipe],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule
    
    
 ],
  exports: [
  BooksListComponent,
  HttpClientModule],
  providers: [
    BooksService
  ]
})
export class BooksModule { }
