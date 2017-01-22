import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AluminiDetailComponent } from './alumini-detail/alumini-detail.component';
import { AluminiComponent } from './alumini/alumini.component';
import { AluminiService } from './services/alumini.service';

@NgModule({
  declarations: [
    AppComponent,
    AluminiDetailComponent,
    AluminiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AluminiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
