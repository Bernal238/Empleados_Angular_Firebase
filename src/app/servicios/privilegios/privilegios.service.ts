import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'enviroments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrivilegiosService {
  public headers: any;

  constructor(private http:HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json', //TIPO DE CONTENIDO JSON
      'Accept': 'application/json' //ACEPTA EL CUERPO DE PETICION JSON
    });
   }

  /**
* @description: Método obtener todas las estaciones
* @param N/A
* @returns promise
* @memberof: constructor() : LinkComponente
* @author: JMHB - 14/03/2023
*/
privilegiosPorUsuario(id_usuario:number): Observable<any> {
  return this.http.post(`${window.location.protocol}//${environment.apiHost}${environment.apiPort}${environment.rutaApi}/listar/privilegios`, { id_usuario }, {headers: this.headers});
}

}
