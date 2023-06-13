/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pacientes_listaComponent } from './pacientes_lista.component';

describe('Pacientes_listaComponent', () => {
  let component: Pacientes_listaComponent;
  let fixture: ComponentFixture<Pacientes_listaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pacientes_listaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pacientes_listaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
