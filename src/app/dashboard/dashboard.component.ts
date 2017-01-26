import { Component, OnInit } from '@angular/core';

import { MyAlumini } from '../my-alumini';
import { AluminiService } from '../services/alumini.service';


@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  alumini : MyAlumini[] = [];

  constructor(private aluminiService : AluminiService) { }

  ngOnInit() {
//    this.aluminiService.getAlumini().then(serviceAlumini => this.alumini = serviceAlumini.slice(0,2));
    this.aluminiService.getAlumini().then(serviceAlumini => this.alumini = serviceAlumini);
    
  }

}
