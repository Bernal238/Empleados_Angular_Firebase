import { Observable } from 'rxjs';
import { environment } from 'enviroments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnidadesService {

  public headers: any;

  constructor(private http:HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',//TIPO DE CONTENIDO JSON//TIPO DE CONTENIDO JSON
      'Accept': 'application/json'//ACEPTA EL CUERPO DE LA PETICION JSON
    });
   }

/**
* @description: Método obtener todas las unidades
* @param N/A
* @returns promise
* @memberof: constructor() : LinkComponente
* @author: JMHB - 14/03/2023
*/
listarDetallesUnidades(): Observable<any> {
  return this.http.get(`${window.location.protocol}//${environment.apiHost}${environment.apiPort}${environment.rutaApi}/listar/detallesUnidades`, {headers: this.headers});
}

/**
* @description: Método obtener todas los tipos de unidades
* @param N/A
* @returns promise
* @memberof: constructor() : LinkComponente
* @author: JMHB - 14/03/2023
*/
listarTiposUnidades(): Observable<any> {
  return this.http.get(`${window.location.protocol}//${environment.apiHost}${environment.apiPort}${environment.rutaApi}/listar/tiposUnidades`, {headers: this.headers});
}

/**
* @description: Método obtener todas los tipos de combustible
* @param N/A
* @returns promise
* @memberof: constructor() : LinkComponente
* @author: JMHB - 14/03/2023
*/
listarTiposCombustible(): Observable<any> {
  return this.http.get(`${window.location.protocol}//${environment.apiHost}${environment.apiPort}${environment.rutaApi}/listar/tiposCombustible`, {headers: this.headers});
}
}
