import { MyAlumini } from '../my-alumini';
import { Alumini } from '../alumini';

const alumini1 : Alumini[] = [{id : 1, name: "Pooja"}, {id : 2, name: "Priya"}];
const alumini2 : Alumini[] = [{id : 1, name: "Ranbir"}, {id : 2, name: "Deepika"}];
const alumini3 : Alumini[] = [{id : 1, name: "Mark"}, {id : 2, name: "Daniel"}];

const myAlumini1 : MyAlumini = {id : 1, name : "PCCE", aluminiList : alumini1};
const myAlumini2 : MyAlumini = {id : 2, name : "M&N School", aluminiList : alumini2};
const myAlumini3 : MyAlumini = {id : 3, name : "L&T", aluminiList : alumini3};

export const ALUMINUS : MyAlumini[] = [
     myAlumini1,
      myAlumini2,
      myAlumini3
];
