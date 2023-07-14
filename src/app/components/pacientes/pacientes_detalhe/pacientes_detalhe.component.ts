import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsDatepickerConfig, BsDatepickerDirective, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { NgxSpinnerService } from 'ngx-spinner';
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
  PostPut: string;
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
    private toastr:ToastrService,
    private localeService: BsLocaleService,
    private spinner:NgxSpinnerService,
    private router:Router
  ) {
    this.formulario = new FormGroup({});
    this.localeService.use('pt-br');
    this.bsConfig = {
      containerClass: 'theme-dark-blue',
      dateInputFormat: 'DD/MM/YYYY',
      adaptivePosition: true,
      showWeekNumbers: false
    };
  }

  ngOnInit() {
    this.carregarPacientes();
    this.validation();
  }

  public carregarPacientes():void{
    this.pacId = +this.activatedRouter.snapshot.paramMap.get('id');
    if(this.pacId != null && this.pacId > 0){
      this.PostPut = 'PUT';
      this.spinner.show();
      this.pacienteService.getPacienteById(this.pacId).subscribe({
        next: (pac: Paciente) => {
          this.paciente = {...pac};
          this.paciente.dt_nasc = new Date(this.paciente.dt_nasc);
          this.formulario.patchValue(this.paciente);
        },
        error: (error:any) => {
          this.toastr.error('Erro ao carregar paciente','Pacientes');
        },
        complete: () =>{
          this.spinner.hide();
        }
      });
    }else{
      this.PostPut = 'POST';
    }
  }

  public salvarAlteracao():void{
    if(this.formulario.valid) {
      this.spinner.show();
      this.paciente = {...this.formulario.value};
      if(this.PostPut == 'POST'){
        this.pacienteService.postPacs(this.paciente).subscribe({
          next:() => {
            this.toastr.success('Paciente cadastrado com êxito','Pacientes');
          },
          error:(error:any) => {
            this.spinner.hide();
            this.toastr.error('Erro ao cadastrar o paciente','Pacientes');
          },
          complete:() => {
            this.spinner.hide();
            this.router.navigate([`/pacientes/pacientes-lista`]);
          }
        });
      }else{
        this.pacienteService.putPacs(this.pacId,this.paciente).subscribe({
          next:() => {
            this.toastr.success('Paciente alterado com êxito','Pacientes');
          },
          error:(error:any) => {
            this.spinner.hide();
            this.toastr.error('Erro ao alterar o paciente','Pacientes');
          },
          complete:() => {
            this.spinner.hide();
            this.router.navigate([`/pacientes/pacientes-lista`]);
          }
        });
      }

    }
  }
  
  public validation():void{
    this.formulario = this.fb.group({
      nm_pac: ['',Validators.required],
      dt_nasc: ['',Validators.required],
      ativo: ['']
    });
  }

  public abrirCalendario(){
    this.datapicker.toggle();
  }

}
