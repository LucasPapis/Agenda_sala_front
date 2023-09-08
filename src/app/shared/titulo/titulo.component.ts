import { Component, EventEmitter, Input,OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Paciente } from 'src/app/models/Paciente';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {

  pacientes:Paciente[];
  pesquisa:FormGroup;
  optTest:string;
  @Input() opt:string = '';
  @Input() opts:string[] = [];
  @Input() tituloName: string = '';
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter();

  constructor(
    private fob:FormBuilder) {}

  ngOnInit():void {
    this.pesquisa = this.fob.group({
      select: [this.opt],
      busca: ['']
    });
  }

  pesquisaM():void{
    let parametro:string;
    let strPesquisa:string;
    let strValueBusca:string = this.pesquisa.get('busca').value;
    switch (this.tituloName.toLowerCase()){
      case 'pacientes':
        if(this.pesquisa.get('select').value == 'nome:'){
          parametro = 'nm_paciente';
          strValueBusca += '*';
        }else{
          parametro = 'dt_nasc';
        }
        break;
        case 'terapeutas':
        if(this.pesquisa.get('select').value == 'nome:'){
          parametro = 'nm_terapeuta';
          strValueBusca += '*';
        }else{
          parametro = 'cracha';
        }
        break;

      case 'salas':
        if(this.pesquisa.get('select').value == 'nome da sala:'){
          parametro = 'nm_sala';
          strValueBusca += '*';
        }else if (this.pesquisa.get('select').value == 'inicio do horaio:') {
          parametro = 'p_horario';
        }else if (this.pesquisa.get('select').value == 'fim do horaio:') {
          parametro = 'u_horario';
        }else{
          parametro = 'tempo_atends';
        }
        break;

      default:
        break;
    }
    strPesquisa = `${parametro}:${strValueBusca}`
    this.buttonClicked.emit(strPesquisa);
  }

  onKeyDown(event:any){
    if (event.key === "Enter") {
      this.pesquisaM();
    }
  }
}
