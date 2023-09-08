import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Terapeutas } from 'src/app/models/Terapeutas';
import { TerapeutaService } from 'src/app/services/terapeuta.service';

@Component({
  selector: 'app-atendentes_detalhe',
  templateUrl: './atendentes_detalhe.component.html',
  styleUrls: ['./atendentes_detalhe.component.css']
})
export class Atendentes_detalheComponent implements OnInit {

  teraId: number;
  statusCode:number;
  PostPut: string;
  tera: Terapeutas;
  formulario: FormGroup;
  get controls():any{
    return this.formulario.controls;
  }

  constructor(
    private activatedRouter: ActivatedRoute,
    private teraService: TerapeutaService,
    private fb:FormBuilder,
    private toastr:ToastrService,
    private localeService: BsLocaleService,
    private spinner:NgxSpinnerService,
    private router:Router
  ) {
    this.formulario = new FormGroup({});
    this.localeService.use('pt-br');
  }

  ngOnInit() {
    this.validation();
    this.carregarPacientes();
  }

  public carregarPacientes():void{
    this.teraId = +this.activatedRouter.snapshot.paramMap.get('id');
    if(this.teraId != null && this.teraId > 0){
      this.PostPut = 'PUT';
      this.spinner.show();
      this.teraService.getTeraById(this.teraId).subscribe({
        next: (response:HttpResponse<any>) => {
          this.statusCode = response.status;
          if(this.statusCode == 200){
            this.tera = {...response.body};
            this.formulario.patchValue(this.tera);
          }
        },
        error: (error:any) => {
          this.toastr.error('Erro ao carregar terapeutas','Terapeuta');
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
      this.tera = {...this.formulario.value};
      if(this.PostPut == 'POST'){
        this.teraService.postTera(this.tera).subscribe({
          next:() => {
            this.toastr.success('Terapeuta cadastrado com êxito','Terapeuta');
          },
          error:(error:any) => {
            this.spinner.hide();
            this.toastr.error('Erro ao cadastrar o terapeuta','Terapeuta');
          },
          complete:() => {
            this.spinner.hide();
            this.router.navigate([`/atendentes/atendentes-lista`]);
          }
        });
      }else{
        this.teraService.putTera(this.teraId,this.tera).subscribe({
          next:() => {
            this.toastr.success('Terapeuta alterado com êxito','Terapeuta');
          },
          error:(error:any) => {
            this.spinner.hide();
            this.toastr.error('Erro ao alterar o terapeuta','Terapeuta');
          },
          complete:() => {
            this.spinner.hide();
            this.router.navigate([`/atendentes/atendentes-lista`]);
          }
        });
      }
    }
  }

  public validation():void{
    this.formulario = this.fb.group({
      nm_terapeuta: ['',Validators.required],
      cracha: ['',[Validators.required,Validators.pattern(/^[0-9]*$/)]]
    });
  }
}
