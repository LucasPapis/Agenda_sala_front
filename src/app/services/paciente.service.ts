import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../models/Paciente';
import { environment } from 'src/environments/enviroment';

@Injectable()
export class PacienteService {

  public pac:Paciente[] = [];
  baseUrl:string = `${environment.apiUrl}/pac`;

  constructor(private http:HttpClient) { }

  getPacientePesquisa(pesquisa:string):Observable<HttpResponse<any>>{
    return this.http.get<HttpResponse<any>>(`${this.baseUrl}?pesquisa=${pesquisa}`,{observe:'response'});
  }
  getPaciente():Observable<HttpResponse<any>>{
    return this.http.get<HttpResponse<any>>(this.baseUrl,{observe:'response'});
  }
  getPacienteById(id:number):Observable<HttpResponse<any>>{
    return this.http.get<HttpResponse<any>>(`${this.baseUrl}/${id}`,{observe:'response'});
  }
  postPacs(pac:Paciente):Observable<Paciente>{
    return this.http.post<Paciente>(this.baseUrl, pac);
  }
  putPacs(id:number, pac:Paciente):Observable<Paciente>{
    return this.http.put<Paciente>(`${this.baseUrl}/${id}`, pac);
  }
  delPacs(id:number):Observable<HttpResponse<any>>{
    return this.http.delete<HttpResponse<any>>(`${this.baseUrl}/${id}`,{observe:'response'});
  }
}
