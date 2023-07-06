/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pacientes_detalheComponent } from './pacientes_detalhe.component';

describe('Pacientes_detalheComponent', () => {
  let component: Pacientes_detalheComponent;
  let fixture: ComponentFixture<Pacientes_detalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pacientes_detalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pacientes_detalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
