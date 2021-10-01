import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    
  ],
  imports: [
    RouterModule,
    MatToolbarModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class CoreModule { }