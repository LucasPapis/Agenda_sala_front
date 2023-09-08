import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Salas } from 'src/app/models/Salas';
import { SalasService } from 'src/app/services/salas.service';

@Component({
  selector: 'app-salas_lista',
  templateUrl: './salas_lista.component.html',
  styleUrls: ['./salas_lista.component.css']
})
export class Salas_listaComponent implements OnInit {

  salas:Salas[] = [];
  salaId:number;
  pesquisa:FormGroup;
  opts:string[] = ['nome da sala:','inicio do horario:','fim do horario:', 'tempo de atendimento:'];
  modalRef:BsModalRef;
  private statusCode:number;

  constructor(
    private salasService:SalasService,
    private router:Router,
    private modalService:BsModalService,
    private toastr:ToastrService,
    private spinner:NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.getSalas();
  }
  salasDetalhe(id:number):void{
    this.router.navigate([`/salas/salas-detalhe/${id}`]);
  }

  pesquisaSalas(strPesquisa:string){
    this.salasService.getSalasPesquisa(strPesquisa).subscribe({
      next:(response:HttpResponse<any>) =>{
        this.statusCode = response.status;
        if(this.statusCode == 200){
          this.salas = response.body;
        }else{
          this.salas = []
        }
      },
      error:(error:any) =>{
        this.spinner.hide();
        this.toastr.error('Erro ao carregar a lista de salas','Salas');
      },
      complete:() =>{
        this.spinner.hide()
      }
    })
  }

  getSalas():void{
    this.salasService.getSalas().subscribe({
      next:(response:HttpResponse<any>) =>{
        this.statusCode = response.status;
        if(this.statusCode == 200){
          this.salas = response.body;
        }else{
          this.salas = []
        }
      },
      error:(error:any) =>{
        this.spinner.hide();
        this.toastr.error('Erro ao carregar a lista de salas','Sala');
      },
      complete:() =>{
        this.spinner.hide()
      }
    });
  }

  openModal(template:TemplateRef<any>,id:number):void{
    this.modalRef = this.modalService.show(template,{class:'modal-sm'});
    this.salaId = id;
  }
  closeModal():void{
    this.modalRef.hide();
  }

  deletarSalas():void{
    this.modalRef.hide();
    this.spinner.show();
    this.salasService.delSala(this.salaId).subscribe({
      next:(response:HttpResponse<any>) => {
        this.statusCode = response.status;
        if(this.statusCode == 200){
          this.getSalas();
          this.toastr.success('Sala deletada com exito','Sala');
        }
      },
      error:(erro:any) => {
        this.toastr.error('Erro ao deletar sala','Salas');
      },
      complete:() => {
        this.spinner.hide();
      }
    })
  }

}
