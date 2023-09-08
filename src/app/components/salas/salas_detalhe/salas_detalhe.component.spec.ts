/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Salas_detalheComponent } from './salas_detalhe.component';

describe('Salas_detalheComponent', () => {
  let component: Salas_detalheComponent;
  let fixture: ComponentFixture<Salas_detalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Salas_detalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Salas_detalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
