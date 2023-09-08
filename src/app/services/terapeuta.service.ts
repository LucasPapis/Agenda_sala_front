import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/enviroment';
import { Terapeutas } from '../models/Terapeutas';

@Injectable({
  providedIn: 'root'
})
export class TerapeutaService {

  public tep:Terapeutas[] = [];
  baseUrl:string = `${environment.apiUrl}/tera`;
  constructor(private http:HttpClient) { }

  getTeraPesquisa(pesquisa:string):Observable<HttpResponse<any>>{
    return this.http.get<HttpResponse<any>>(`${this.baseUrl}?pesquisa=${pesquisa}`,{observe:'response'});
  }
  getTeras():Observable<HttpResponse<any>>{
    return this.http.get<HttpResponse<any>>(this.baseUrl,{observe:'response'});
  }
  getTeraById(id:number):Observable<HttpResponse<any>>{
    return this.http.get<HttpResponse<any>>(`${this.baseUrl}/${id}`,{observe:'response'});
  }
  postTera(pac:Terapeutas):Observable<Terapeutas>{
    return this.http.post<Terapeutas>(this.baseUrl, pac);
  }
  putTera(id:number, pac:Terapeutas):Observable<Terapeutas>{
    return this.http.put<Terapeutas>(`${this.baseUrl}/${id}`, pac);
  }
  delTera(id:number):Observable<HttpResponse<any>>{
    return this.http.delete<HttpResponse<any>>(`${this.baseUrl}/${id}`,{observe:'response'});
  }
}


