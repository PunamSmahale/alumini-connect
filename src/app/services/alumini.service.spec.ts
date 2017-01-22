/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AluminiService } from './alumini.service';

describe('AluminiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AluminiService]
    });
  });

  it('should ...', inject([AluminiService], (service: AluminiService) => {
    expect(service).toBeTruthy();
  }));
});
