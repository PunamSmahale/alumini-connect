import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { MyAlumini } from '../my-alumini';
import { AluminiService} from '../services/alumini.service';

@Component({
  moduleId : module.id,
  selector: 'my-alumini-detail',
  templateUrl: './alumini-detail.component.html',
  styleUrls: ['./alumini-detail.component.css']
})
export class AluminiDetailComponent implements OnInit {

  @Input()
  alumini : MyAlumini;

  constructor(
            private aluminiService : AluminiService,
            private route : ActivatedRoute,
            private location : Location) { }

  ngOnInit() {
    this.route.params
    .switchMap((params : Params) => this.aluminiService.getAluminus(+params['id']))
    .subscribe(alumini => this.alumini = alumini);
  }

  goBack() : void {
    this.location.back();
  }

}
