import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsDatepickerConfig, BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { ToastrService } from 'ngx-toastr';
import { Paciente } from 'src/app/models/Paciente';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-pacientes_detalhe',
  templateUrl: './pacientes_detalhe.component.html',
  styleUrls: ['./pacientes_detalhe.component.css']
})
export class Pacientes_detalheComponent implements OnInit {
  pacId: number;
  paciente: Paciente;
  formulario: FormGroup;
  bsConfig: Partial<BsDatepickerConfig>;
  get controls():any{
    return this.formulario.controls;
  }
  @ViewChild('datapicker') datapicker!: BsDatepickerDirective;


  constructor(
    private activatedRouter: ActivatedRoute,
    private pacienteService: PacienteService,
    private fb:FormBuilder,
    private toastr:ToastrService
  ) {
    this.formulario = new FormGroup({});
    this.bsConfig = {
      containerClass: 'theme-dark-blue',
      dateInputFormat: 'DD/MM/YYYY',
      adaptivePosition: true
    };
  }

  ngOnInit() {
    this.carregarPacientes();
    this.validation();
  }

  public carregarPacientes():void{
    this.pacId = +this.activatedRouter.snapshot.paramMap.get('id');
    if(this.pacId != null && this.pacId > 0){
      this.pacienteService.getPacienteById(this.pacId).subscribe({
        next: (pac: Paciente) => {
          this.paciente = {...pac};
          this.paciente.dt_nasc = new Date(this.paciente.dt_nasc);
          this.formulario.patchValue(this.paciente);
        },
        error: (error:any) => {
          console.log(error);
        },
        complete: () => {}
      });
    }
  }

  public validation():void{
    this.formulario = this.fb.group({
      nm_pac: ['',Validators.required],
      dt_nasc: [Validators.required],
      ativo: ['']
    });
  }

  public abrirCalendario(){
    this.datapicker.toggle();
  }

}
