import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appsettings } from '../../settings/appsettings';
import { usuario } from '../interfaces/usuario';
import { Observable } from 'rxjs';
import { ResponceAcceso } from '../interfaces/ResponseAcceso';
import { login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AccesoService {

  private http = inject(HttpClient)
  private baseUrl:string = appsettings.apiUrl;


  constructor() { }

  login(objecto : login): Observable<ResponceAcceso>{
   return this.http.post<ResponceAcceso>(`${this.baseUrl}oauth/login`,objecto)
  }
}
