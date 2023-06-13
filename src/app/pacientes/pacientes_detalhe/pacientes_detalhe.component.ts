import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsDatepickerConfig, BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-pacientes_detalhe',
  templateUrl: './pacientes_detalhe.component.html',
  styleUrls: ['./pacientes_detalhe.component.css']
})
export class Pacientes_detalheComponent implements OnInit {

  formulario: FormGroup;
  bsConfig: Partial<BsDatepickerConfig>;
  @ViewChild('datapicker') datapicker!: BsDatepickerDirective;


  constructor() {
    this.formulario = new FormGroup({
      dtnasc: new FormControl('')
    });

    this.bsConfig = {
      containerClass: 'theme-dark-blue',
      dateInputFormat: 'DD/MM/YYYY'
    };
  }

  ngOnInit() {
  }

  abrirCalendario(){
    this.datapicker.toggle();
  }

}
