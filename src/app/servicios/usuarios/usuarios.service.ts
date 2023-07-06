import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'enviroments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public headers: any;

  constructor(private http:HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
  }

    /**
* @description: Método obtener todos los usuarios
* @param N/A
* @returns promise
* @memberof: constructor() : LinkComponente
* @author: JMHB - 01/05/2023
*/
listarUsuarios(): Observable<any> {
  return this.http.get(`${window.location.protocol}//${environment.apiHost}${environment.apiPort}${environment.rutaApi}/listar/usuarios`, {headers: this.headers});
}



}
