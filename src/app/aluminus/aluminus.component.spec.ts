/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AluminusComponent } from './aluminus.component';

describe('AluminusComponent', () => {
  let component: AluminusComponent;
  let fixture: ComponentFixture<AluminusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AluminusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AluminusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
