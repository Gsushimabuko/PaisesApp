import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';
  private APICAPITAL: string = 'https://restcountries.com/v2/capital/'

  get httpParams(){
    return new HttpParams()
    .set('fields', 'name,capital,alpha2Code,flag,population');
  }

  constructor(private http:HttpClient) { }

  buscarPais(termino:string): Observable<Pais[]>{
    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Pais[]>(url,{params: this.httpParams}) 
  }

  buscarCapital (termino:string) : Observable<Pais[]> {
    const url = `${this.APICAPITAL}${termino}`
    return this.http.get<Pais[]>(url,{params: this.httpParams})
  }

  getPaisPorId(id:string):Observable<Pais>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Pais>(url)
  }

  buscarRegion( codigoRegion: string ): Observable<Pais[]>{
    

    const url = `${this.apiUrl}/regionalbloc/${codigoRegion}`;
    return this.http.get<Pais[]>(url,{params: this.httpParams}) 
  }

}
