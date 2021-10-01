import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutesConfig } from './config/routesConfig';


const routes: Routes = [ { 
    path: RoutesConfig.books,
    loadChildren: () => import('./books/books.module').then(m => m.BooksModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
