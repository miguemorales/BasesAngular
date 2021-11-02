import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { DefaultComponent } from './default/default.component';


@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
    DefaultComponent
  ],
  exports:[
    AboutComponent,
    ContactComponent,
    HomeComponent,
    DefaultComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
