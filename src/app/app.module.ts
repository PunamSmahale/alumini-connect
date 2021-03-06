import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';

// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './services/in-memory-data.service';

import { config } from 'firebase.config';
import { AppComponent } from './app.component';
import { AluminiDetailComponent } from './alumini-detail/alumini-detail.component';
import { AluminiComponent } from './alumini/alumini.component';
import { AluminiService } from './services/alumini.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AluminiListComponent } from './alumini-list/alumini-list.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AluminiDetailComponent,
    AluminiComponent,
    DashboardComponent,
    AluminiListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,    
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config,{
      provider:  AuthProviders.Google,
      method : AuthMethods.Popup
    })
  ],
  providers: [AluminiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
