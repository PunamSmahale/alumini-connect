import { MyAlumini } from '../my-alumini';
import { Alumini } from '../alumini';

const alumini1 : Alumini[] = [{id : 1, name: "Pooja"}, {id : 2, name: "Priya"}];

const myAlumini1 : MyAlumini = {id : 1, name : "tester", aluminiList : alumini1};

export const ALUMINUS : MyAlumini[] = [
      new MyAlumini, { id : 1, name: "PCCE 1", aluminiList: alumini1 },
      new MyAlumini, { id : 2, name: "PCCE 2", aluminiList: alumini1 },
      new MyAlumini, { id : 3, name: "PCCE 3", aluminiList: alumini1 },
      new MyAlumini, { id : 4, name: "PCCE 4", aluminiList: alumini1 },
      new MyAlumini, { id : 5, name: "PCCE 5", aluminiList: alumini1 }
];
