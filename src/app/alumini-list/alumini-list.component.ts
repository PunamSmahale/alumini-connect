import { Component, OnInit } from '@angular/core';

import { AluminiService } from '../services/alumini.service';
import { MyAlumini } from '../my-alumini';
import { Alumini } from '../alumini';

@Component({
  selector: 'app-alumini-list',
  templateUrl: './alumini-list.component.html',
  styleUrls: ['./alumini-list.component.css']
})
export class AluminiListComponent implements OnInit {

  aluminiList : Alumini[] = [];
  aluminiData : MyAlumini[] = [];
  constructor(private aluminiService : AluminiService ) { }

  ngOnInit() {
    this.aluminiService.getAluminiList(+"5").then(list => this.aluminiList = list);
  }

}
