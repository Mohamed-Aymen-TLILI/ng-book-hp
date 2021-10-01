import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './book';
import { ApiURL } from 'src/app/config/apiUrlConfigs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooks (): Observable<Book[]> {
      return this.http.get(`${ApiURL.baseUrl}/${ApiURL.booksUrl}`)
            .pipe(
              map((books: Array<Object>) => {
                return books.map ((book) => new Book(book))
              }
           ))
  };

  /* getBook(): Observable<Book>{
    return this.http.get(`${ApiURL.baseUrl}/${ApiURL.booksUrl}`)
            .pipe(
              map((books: Array<object>) => { 
          const book = books.filter((book) => book['isbn'] === isbn)[0]; 
          return book ? new Book(book) : null; 
        })
      );
  } */
}
