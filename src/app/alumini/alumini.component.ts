import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AluminiService } from '../services/alumini.service';
import { MyAlumini } from '../my-alumini';

@Component({
  selector: 'my-alumini',
  templateUrl: './alumini.component.html',
  styleUrls: ['./alumini.component.css']
})
export class AluminiComponent implements OnInit {
 aluminus: MyAlumini[];
 selectedAlumini : MyAlumini;

  constructor(
    private aluminiService : AluminiService,
    private router : Router) {  }

  getAlumini() : void{
    this.aluminiService.getAlumini().then( aluminus => this.aluminus = aluminus );
  }

  ngOnInit() : void{
    this.getAlumini();
  }

  onSelect(alumini : MyAlumini){
    this.selectedAlumini = alumini;
  }

  goToDetail() {
    this.router.navigate(['/alumini', this.selectedAlumini.id]);
  }

}
