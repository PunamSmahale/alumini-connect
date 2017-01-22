import { Component, OnInit } from '@angular/core';

import { AluminiService } from './services/alumini.service';
import { MyAlumini } from './my-alumini';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [AluminiService]
})
export class AppComponent implements OnInit{
 title = 'Join Alumini !';
 aluminus: MyAlumini[];
 selectedAlumini : MyAlumini;

  constructor(private aluminiService : AluminiService) {  }

  getAlumini() : void{
    this.aluminiService.getAlumini().then( aluminus => this.aluminus = aluminus );
  }

  ngOnInit() : void{
    this.getAlumini();
  }

  onSelect(alumini : MyAlumini){
    this.selectedAlumini = alumini;
  }

}
