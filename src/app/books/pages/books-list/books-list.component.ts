import { Component, OnInit } from '@angular/core';
import { Book } from '../../shared/book';
import { BooksService } from '../../shared/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  booksDisplayed: Book[] = [];
  loader: boolean = false;

  constructor( private bService: BooksService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks (): void {
    this.loader = true;
    this.bService.getBooks()
        .subscribe((books: Book[]) =>{
          this.booksDisplayed = books;
          this.loader = false;
          console.log(books);
        });
  }

}
