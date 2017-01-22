import { Component } from '@angular/core';

import { AluminiDetailComponent } from './alumini-detail/alumini-detail.component';

import { MyAlumini } from './my-alumini';

// export class myAlumini {
//   id : number;
//   name : string;
// }

const ALUMINUS : MyAlumini[] = [
  { id : 1, name : 'Popular English'},
  { id : 2, name : 'Shishukung'},
  { id : 3, name : 'M&N English'},
  { id : 4, name : 'Parvatibhai College'},
  { id : 5, name : 'PCCE'},
  { id : 6, name : 'L&T SET Training'},
  { id : 7, name : 'L&T COEP'},
  { id : 8, name : 'L&T ETM'},
  { id : 9, name : 'L&T Strategic UI'},
  { id : 10, name : 'L&T MyT BI'}
  ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'Join Alumini !';
 aluminus = ALUMINUS;
 selectedAlumini : MyAlumini;

  onSelect(alumini : MyAlumini){
    this.selectedAlumini = alumini;
  }
}
