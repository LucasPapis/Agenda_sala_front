import { Injectable } from '@angular/core';
import { Salas } from '../models/Salas';
import { environment } from 'src/environments/enviroment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalasService {

  public salas:Salas[] = [];
  baseUrl:string = `${environment.apiUrl}/sala`;
  constructor(private http:HttpClient) { }

  getSalasPesquisa(pesquisa:string):Observable<HttpResponse<any>>{
    return this.http.get<HttpResponse<any>>(`${this.baseUrl}?pesquisa=${pesquisa}`,{observe:'response'});
  }
  getSalas():Observable<HttpResponse<any>>{
    return this.http.get<HttpResponse<any>>(this.baseUrl,{observe:'response'});
  }
  getsalaById(id:number):Observable<HttpResponse<any>>{
    return this.http.get<HttpResponse<any>>(`${this.baseUrl}/${id}`,{observe:'response'});
  }
  postSala(pac:Salas):Observable<Salas>{
    return this.http.post<Salas>(this.baseUrl, pac);
  }
  putSala(id:number, pac:Salas):Observable<Salas>{
    return this.http.put<Salas>(`${this.baseUrl}/${id}`, pac);
  }
  delSala(id:number):Observable<HttpResponse<any>>{
    return this.http.delete<HttpResponse<any>>(`${this.baseUrl}/${id}`,{observe:'response'});
  }

}
