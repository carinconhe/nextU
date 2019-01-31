/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ITareasHoyComponent } from './i-tareas-hoy.component';

describe('ITareasHoyComponent', () => {
  let component: ITareasHoyComponent;
  let fixture: ComponentFixture<ITareasHoyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITareasHoyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITareasHoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
