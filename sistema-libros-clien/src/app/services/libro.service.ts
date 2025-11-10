import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsettings } from '../../settings/appsettings';
import { LibrosResponse } from '../interfaces/librosResponse';
import { ResponceAcceso } from '../interfaces/ResponseAcceso';
import { Observable } from 'rxjs';
import { ResponseUpdate } from '../interfaces/uptateResponse';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private http = inject(HttpClient)
  private baseUrl:string = appsettings.apiUrl;
  constructor() { }

    lista(pag : number, datos:number, buscar : string,estado:string,ano:string): Observable<LibrosResponse>{
       const params = new URLSearchParams({
        pag: pag.toString(),
        datos: datos.toString(),
        buscar,
        estado,
        ano
      });
     return this.http.get<LibrosResponse>(`${this.baseUrl}libros?${params.toString()}`);
    }
    editar(id: number, payload: any): Observable<ResponseUpdate> {
      return this.http.put<ResponseUpdate>(  `${this.baseUrl}libros/${id}`, payload )
    }


  eliminar(id: number) {
      return this.http.delete<{ message: string }>(`${this.baseUrl}libros/${id}`)
  }

  crear(payload: any) {
  return this.http.post<{ message: string }>(`${this.baseUrl}libros`, payload );
}



}
