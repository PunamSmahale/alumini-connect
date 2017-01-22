import { Component, Input, OnInit } from '@angular/core';

import { MyAlumini } from '../my-alumini';

@Component({
  selector: 'my-alumini-detail',
  templateUrl: './alumini-detail.component.html',
  styleUrls: ['./alumini-detail.component.css']
})
export class AluminiDetailComponent implements OnInit {

  @Input()
  alumini : MyAlumini;

  constructor() { }

  ngOnInit() {
  }

}
