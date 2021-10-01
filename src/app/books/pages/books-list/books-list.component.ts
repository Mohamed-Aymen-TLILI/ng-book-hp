import { Component, OnInit } from '@angular/core';
import { Book } from '../../shared/book';
import { BooksService } from '../../shared/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  books: Book[] = [];
  loader: Boolean = false;

  constructor( private bService: BooksService) { }

  ngOnInit() {
  }

  getBooks (): void {
    this.loader = true;
    this.bService.getBooks()
        .subscribe((books: Book[]) =>{
          this.loader = false;
          this.books = books;
        }, (error) => {
          this.loader = false;
          alert('Oups something went wrong !');
        });
  }

}
