import { Component, OnInit, TemplateRef } from '@angular/core';
import { Paciente } from 'src/app/models/Paciente';
import { PacienteService } from 'src/app/services/paciente.service';
import { NgStyle } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pacientes_lista',
  templateUrl: './pacientes_lista.component.html',
  styleUrls: ['./pacientes_lista.component.css']
})
export class Pacientes_listaComponent implements OnInit {

  public pacientes:Paciente[] = [];
  pesquisa:FormGroup;
  opts:string[] = ['nome:','data:']
  modalRef:BsModalRef

  constructor(
    private pacienteService:PacienteService,
    private router:Router,
    private modalService:BsModalService,
    private toastr:ToastrService,
    private spinner:NgxSpinnerService,
    private fob:FormBuilder) {
      this.pesquisa = this.fob.group({
        select: [this.opts[0]],
        busca: ['']
      });
    }

  ngOnInit() {
    this.spinner.show();
    this.getPacs();
  }

  pacientesDetalhe(id:number):void{
    this.router.navigate([`/pacientes/pacientes-detalhe/${id}`]);
  }

  pesquisaPac():void{
    let parametro:string;
    let strPesquisa:string;
    if(this.pesquisa.get('select').value == 'nome:'){
      parametro = 'nm_pac';
    }else{
      parametro = 'dt_nasc';
    }
    strPesquisa = `${parametro}:${this.pesquisa.get('busca').value}`
    this.pacienteService.getPacientePesquisa(strPesquisa).subscribe({
      next:(pacientes:Paciente[]) =>{
        this.pacientes = pacientes
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
      next:(pacientes:Paciente[]) =>{
        this.pacientes = pacientes
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

  openModal(template:TemplateRef<any>):void{
    this.modalRef = this.modalService.show(template,{class:'modal-sm'});
  }

  desativarPaciente():void{
    this.modalRef.hide()
    this.toastr.success('Paciente deletado com exito','Paciente');
  }

}
