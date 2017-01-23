import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService  implements InMemoryDbService{
createDB(){
  let alumini = [
      { id : 1, name : 'Popular English'},
      { id : 2, name : 'Shishukung'},
      { id : 3, name : 'M&N English'},
      { id : 4, name : 'Parvatibhai College'},
      { id : 5, name : 'PCCE'},
      { id : 6, name : 'L&T SET Training'},
      { id : 7, name : 'L&T Travelers BI'},
      { id : 8, name : 'L&T Mercer'},
      { id : 9, name : 'L&T Travelers PI'},
      { id : 10, name : 'L&T EBusiness'}
  ];

  return {alumini};
}
  constructor() { }

}
