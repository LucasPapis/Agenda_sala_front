import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Salas } from 'src/app/models/Salas';
import { SalasService } from 'src/app/services/salas.service';

@Component({
  selector: 'app-salas_detalhe',
  templateUrl: './salas_detalhe.component.html',
  styleUrls: ['./salas_detalhe.component.css']
})
export class Salas_detalheComponent implements OnInit {

  salaId: number;
  statusCode:number;
  PostPut: string;
  sala: Salas;
  formulario: FormGroup;
  get controls():any{
    return this.formulario.controls;
  }

  constructor(
    private activatedRouter: ActivatedRoute,
    private salasService: SalasService,
    private fb:FormBuilder,
    private toastr:ToastrService,
    private spinner:NgxSpinnerService,
    private router:Router) {
      this.formulario = new FormGroup({});
    }

  ngOnInit() {
    this.carregarSalas();
    this.validation();
  }

  public carregarSalas():void{
    this.salaId = +this.activatedRouter.snapshot.paramMap.get('id');
    if(this.salaId != null && this.salaId > 0){
      this.PostPut = 'PUT';
      this.spinner.show();
      this.salasService.getsalaById(this.salaId).subscribe({
        next: (response:HttpResponse<any>) => {
          this.statusCode = response.status;
          if(this.statusCode == 200){
            this.sala = {...response.body};
            //this.sala.dt_nasc = new Date(this.sala.dt_nasc);
            this.formulario.patchValue(this.sala);
          }
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
      this.sala = {...this.formulario.value};
      if(this.PostPut == 'POST'){
        this.salasService.postSala(this.sala).subscribe({
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
        this.salasService.putSala(this.salaId,this.sala).subscribe({
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
      nm_sala: ['',Validators.required],
      i_horario: ['',Validators.required],
      u_horario: ['', Validators.required]
      ///tempo_atend: ['']
    });
  }

}
