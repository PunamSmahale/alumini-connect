import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap'

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
  constructor(private aluminiService : AluminiService,
              private route : ActivatedRoute ) { }

  ngOnInit() {
    this.route.params
    .switchMap((params : Params) => this.aluminiService.getAluminiList(+params["id"]))
    .subscribe(list => this.aluminiList = list);
  }

}
