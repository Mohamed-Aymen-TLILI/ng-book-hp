import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './books/pages/books-list/books-list.component';

import { RoutesConfig } from './config/routesConfig';


const routes: Routes = [
  {
    path: '',
    component: BooksListComponent
  }
];

  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
