import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../models/Paciente';

@Injectable()
export class PacienteService {

  baseUrl:string = 'http://localhost/AgendaSala_api/api/pac';

  constructor(private http:HttpClient) { }

  getPaciente():Observable<Paciente[]>{
    return this.http.get<Paciente[]>(this.baseUrl)
  }

}
