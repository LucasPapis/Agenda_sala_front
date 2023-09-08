import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Paciente } from 'src/app/models/Paciente';
import { PacienteService } from 'src/app/services/paciente.service';
import { NgStyle } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-pacientes_lista',
  templateUrl: './pacientes_lista.component.html',
  styleUrls: ['./pacientes_lista.component.css']
})
export class Pacientes_listaComponent implements OnInit {
  pacientes:Paciente[] = [];
  pacienteId:number;
  pesquisa:FormGroup;
  opts:string[] = ['nome:','data de nascimento:']
  modalRef:BsModalRef
  private statusCode:number;

  constructor(
    private pacienteService:PacienteService,
    private router:Router,
    private modalService:BsModalService,
    private toastr:ToastrService,
    private spinner:NgxSpinnerService) {}

  ngOnInit() {
    this.spinner.show();
    this.getPacs();
  }

  pacientesDetalhe(id:number):void{
    this.router.navigate([`/pacientes/pacientes-detalhe/${id}`]);
  }

  pesquisaPac(strPesquisa:string){
    this.pacienteService.getPacientePesquisa(strPesquisa).subscribe({
      next:(response:HttpResponse<any>) =>{
        this.statusCode = response.status;
        if(this.statusCode == 200){
          this.pacientes = response.body;
        }else{
          this.pacientes = []
        }
      },
      error:(error:any) =>{
        this.spinner.hide();
        this.toastr.error('Erro ao carregar a lista de pacientes','Pacientes');
      },
      complete:() =>{
        this.spinner.hide()
      }
    })
  }

  getPacs():void{
    this.pacienteService.getPaciente().subscribe({
      next:(response:HttpResponse<any>) =>{
        this.statusCode = response.status;
        if(this.statusCode == 200){
          this.pacientes = response.body;
        }else{
          this.pacientes = []
        }
      },
      error:(error:any) =>{
        this.spinner.hide();
        this.toastr.error('Erro ao carregar a lista de pacientes','Pacientes');
      },
      complete:() =>{
        this.spinner.hide()
      }
    });
  }

  openModal(template:TemplateRef<any>,id:number):void{
    this.modalRef = this.modalService.show(template,{class:'modal-sm'});
    this.pacienteId = id;
  }
  closeModal():void{
    this.modalRef.hide();
  }

  deletarPac():void{
    this.modalRef.hide();
    this.spinner.show();
    this.pacienteService.delPacs(this.pacienteId).subscribe({
      next:(response:HttpResponse<any>) => {
        this.statusCode = response.status;
        if(this.statusCode == 200){
          this.getPacs();
          this.toastr.success('Paciente deletado com exito','Paciente');
        }
      },
      error:(erro:any) => {
        this.toastr.error('Erro ao deletar paciente','Paciente');
      },
      complete:() => {
        this.spinner.hide();
      }
    })
  }
}
