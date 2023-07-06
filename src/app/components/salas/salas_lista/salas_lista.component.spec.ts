/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Salas_listaComponent } from './salas_lista.component';

describe('Salas_listaComponent', () => {
  let component: Salas_listaComponent;
  let fixture: ComponentFixture<Salas_listaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Salas_listaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Salas_listaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
