import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/Paciente';
import { PacienteService } from 'src/app/services/paciente.service';
import { NgStyle } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pacientes_lista',
  templateUrl: './pacientes_lista.component.html',
  styleUrls: ['./pacientes_lista.component.css']
})
export class Pacientes_listaComponent implements OnInit {

  public pacientes:Paciente[] = [];

  constructor(private pacienteService:PacienteService, private router:Router) { }

  ngOnInit() {
    this.getPacs();
  }

  pacientesDetalhe(id:number):void{
    this.router.navigate([`/pacientes/pacientes-detalhe/${id}`]);
  }



  getPacs():void{
    this.pacienteService.getPaciente().subscribe({
      next:(pacientes:Paciente[]) =>{
        this.pacientes = pacientes
      },
      error:(error:any) =>{
        console.log('Deu bosta:' + error);
      }
    });
  }

}
