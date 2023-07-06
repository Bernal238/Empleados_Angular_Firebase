import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'enviroments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CombustibleService {

  public headers: any;

  constructor(private http:HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json', //TIPO DE CONTENIDO JSON
      'Accept': 'application/json' //ACEPTA EL CUERPO DE LA PETICION JSON
    });
  }

/**
* @description: Método obtener todas las estaciones
* @param N/A
* @returns promise
* @memberof: constructor() : LinkComponente
* @author: JMHB - 14/03/2023
*/
listarEstaciones(): Observable<any> {
  return this.http.get(`${window.location.protocol}//${environment.apiHost}${environment.apiPort}${environment.rutaApi}/listar/estaciones`, {headers: this.headers});
}

/**
* @description: Método obtener todas las unidades
* @param N/A
* @returns promise
* @memberof: constructor() : LinkComponente
* @author: JMHB - 14/03/2023
*/
listarUnidades(): Observable<any> {
  return this.http.get(`${window.location.protocol}//${environment.apiHost}${environment.apiPort}${environment.rutaApi}/listar/unidades`, {headers: this.headers});
}

/**
* @description: Método obtener para registrar un abastecimiento
* @param N/A
* @returns promise
* @memberof: constructor() : LinkComponente
* @author: JMHB - 16/03/2023
*/
registroCombustible(datosCombustible: any): Observable<any> {
  return this.http.post(`${window.location.protocol}//${environment.apiHost}${environment.apiPort}${environment.rutaApi}/combustible/registrar`, { datosCombustible }, {headers: this.headers});
}

/**
* @description: Método obtener para obtener los tickets de abastecimiento
* @param N/A
* @returns promise
* @memberof: constructor() : LinkComponente
* @author: JMHB - 18/03/2023
*/
listarTickets():Observable<any>{
  return this.http.get(`${window.location.protocol}//${environment.apiHost}${environment.apiPort}${environment.rutaApi}/listar/tickets`, {headers: this.headers});
}

/**
* @description: Método obtener para obtener el ultimo km por unidad
* @param N/A
* @returns promise
* @memberof: constructor() : LinkComponente
* @author: JMHB - 18/03/2023
*/
listarUltimoKm( id_unidad: number ):Observable<any>{
  return this.http.post(`${window.location.protocol}//${environment.apiHost}${environment.apiPort}${environment.rutaApi}/listar/ultimoKm`, { id_unidad }, { headers: this.headers });
}



}
