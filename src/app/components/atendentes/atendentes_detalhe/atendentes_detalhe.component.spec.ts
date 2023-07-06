/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Atendentes_detalheComponent } from './atendentes_detalhe.component';

describe('Atendentes_detalheComponent', () => {
  let component: Atendentes_detalheComponent;
  let fixture: ComponentFixture<Atendentes_detalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Atendentes_detalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Atendentes_detalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
