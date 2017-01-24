import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService  implements InMemoryDbService{
createDb(){
    let alumini = [
      { id : 1, name : 'Popular English', aluminiList:[{id: 1, name: "Sonia"}, {id: 2 , name: "Manu"}]},
      { id : 2, name : 'Shishukung'},
      { id : 3, name : 'M&N English'},
      { id : 4, name : 'Parvatibhai College'},
      { id : 5, name : 'PCCE', aluminiList:[{id: 1, name: "Deepti"}, {id: 2 , name: "Manjali"}, {id: 2 , name: "Seema"}]}
  ];

  return {alumini};
}
  constructor() { }

}
