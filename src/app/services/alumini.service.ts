import { Injectable } from '@angular/core';

import { MyAlumini } from '../my-alumini';
import { ALUMINUS } from '../mock-data/mock-alumini';

@Injectable()
export class AluminiService {

  constructor() { }

  getAlumini() : Promise<MyAlumini[]> {
      return Promise.resolve(ALUMINUS);
  }

  getAluminus(id : number) : Promise<MyAlumini>{
    return this.getAlumini().then(alumini => alumini.find(aluminus => aluminus.id === id));
  }
  
  getAluminiSlowly() : Promise<MyAlumini[]>{
    //returns data after a delay of 2 seconds
    return new Promise(resolve =>
    setTimeout(() => resolve(this.getAlumini()), 2000));
  }
}
