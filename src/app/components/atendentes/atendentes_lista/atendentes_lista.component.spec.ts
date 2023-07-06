/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Atendentes_listaComponent } from './atendentes_lista.component';

describe('Atendentes_listaComponent', () => {
  let component: Atendentes_listaComponent;
  let fixture: ComponentFixture<Atendentes_listaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Atendentes_listaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Atendentes_listaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
