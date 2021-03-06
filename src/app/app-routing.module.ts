import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AluminiDetailComponent } from './alumini-detail/alumini-detail.component';
import { AluminiComponent } from './alumini/alumini.component';
import { AluminiService } from './services/alumini.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AluminiListComponent } from './alumini-list/alumini-list.component';

const routes : Routes = [
  {path : '', redirectTo : '/dashboard', pathMatch : 'full'},
  {path : 'alumini', component : AluminiComponent},
  {path : 'dashboard', component : DashboardComponent},
  {path : 'alumini/:id', component : AluminiListComponent},
  {path : 'list/:id', component : AluminiListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
exports  : [RouterModule]
})
export class AppRoutingModule { }
