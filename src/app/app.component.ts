import { Component } from '@angular/core';

export class myAlumini {
  id : number;
  name : string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Join Alumini !';
  alumini : myAlumini = {
    id : 1,
    name : 'PCCE'
  };
}
