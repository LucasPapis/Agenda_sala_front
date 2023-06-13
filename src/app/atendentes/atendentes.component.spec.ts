/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AtendentesComponent } from './atendentes.component';

describe('AtendentesComponent', () => {
  let component: AtendentesComponent;
  let fixture: ComponentFixture<AtendentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtendentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtendentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
