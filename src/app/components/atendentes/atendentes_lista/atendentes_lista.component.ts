import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Terapeutas } from 'src/app/models/Terapeutas';
import { TerapeutaService } from 'src/app/services/terapeuta.service';

@Component({
  selector: 'app-atendentes_lista',
  templateUrl: './atendentes_lista.component.html',
  styleUrls: ['./atendentes_lista.component.css']
})
export class Atendentes_listaComponent implements OnInit {
  private modalRef:BsModalRef;
  private statusCode:number;
  public teras:Terapeutas[] = [];
  public terapeutaID:number;
  opts:string[] = ['cracha:','nome:']
  constructor(
    private router:Router,
    private teraService:TerapeutaService,
    private modalService:BsModalService,
    private toastr:ToastrService,
    private spinner:NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.getTeras();
  }

  getTeras():void{
    this.teraService.getTeras().subscribe({
      next:(response:HttpResponse<any>) =>{
        this.statusCode = response.status;
        if(this.statusCode == 200){
          this.teras = response.body;
          console.log(this.teras);
        }else{
          this.teras = []
        }
      },
      error:(error:any) =>{
        this.spinner.hide();
        this.toastr.error('Erro ao carregar a lista de terapeutas','Terapeuta');
      },
      complete:() =>{
        this.spinner.hide()
      }
    });
  }

  pesquisaTera(strPesquisa:string){
    this.teraService.getTeraPesquisa(strPesquisa).subscribe({
      next:(response:HttpResponse<any>) =>{
        this.statusCode = response.status;
        if(this.statusCode == 200){
          this.teras = response.body;
        }else{
          this.teras = []
        }
      },
      error:(error:any) =>{
        this.spinner.hide();
        this.toastr.error('Erro ao pesquisar terapeuta','Terapeuta');
      },
      complete:() =>{
        this.spinner.hide()
      }
    })
  }

  atendentesDetalhe(id:number):void{
    this.router.navigate([`/atendentes/atendentes-detalhe/${id}`]);
  }

  deletarTera():void{
    this.modalRef.hide();
    this.spinner.show();
    this.teraService.delTera(this.terapeutaID).subscribe({
      next:(response:HttpResponse<any>) => {
        this.statusCode = response.status;
        if(this.statusCode == 200){
          this.getTeras();
          this.toastr.success('Terapeuta deletado com exito','Terapeuta');
        }
      },
      error:(erro:any) => {
        this.toastr.error('Erro ao deletar terapeuta','Terapeuta');
        this.spinner.hide();
      },
      complete:() => {
        this.spinner.hide();
      }
    })
  }

    openModal(template:TemplateRef<any>,id:number):void{
    this.modalRef = this.modalService.show(template,{class:'modal-sm'});
    this.terapeutaID = id;
  }
  closeModal():void{
    this.modalRef.hide();
  }

}
