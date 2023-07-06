import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsDatepickerConfig, BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-agendamento-detalhe',
  templateUrl: './agendamento-detalhe.component.html',
  styleUrls: ['./agendamento-detalhe.component.css']
})
export class AgendamentoDetalheComponent implements OnInit {

  formulario: FormGroup;
  bsConfig: Partial<BsDatepickerConfig>;
  @ViewChild('datapicker') datapicker!: BsDatepickerDirective;

  constructor() {

    this.formulario = new FormGroup({
      dt_agenda: new FormControl(''),
      myTime: new FormControl('')
    });

    this.bsConfig = {
      containerClass: 'theme-dark-blue',
      dateInputFormat: 'DD/MM/YYYY',
    };
  }

  ngOnInit() {}

  abrirCalendario(){
    this.datapicker.toggle();
  }

}
