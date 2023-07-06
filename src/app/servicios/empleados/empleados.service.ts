import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'enviroments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  public headers: any;

  constructor(private http:HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json', //TIPO DE CONTENIDO JSON
      'Accept': 'application/json' //ACEPTA EL CUERPO DE LA PETICION JSON
    });
  }


  /**
* @description: Método obtener todos los empleados
* @param N/A
* @returns promise
* @memberof: constructor() : LinkComponente
* @author: JMHB - 04/03/2023
*/
listarEmpleados(): Observable<any> {
  return this.http.get(`${window.location.protocol}//${environment.apiHost}${environment.apiPort}${environment.rutaApi}/listar/empleados`);
}

/**
* @description: Método obtener agregar un empleado
* @param N/A
* @returns promise
* @memberof: constructor() : LinkComponente
* @author: JMHB - 04/03/2023
*/
agregarEmpleado(datosEmpleado: any): Observable<any> {
  return this.http.post(`${window.location.protocol}//${environment.apiHost}${environment.apiPort}${environment.rutaApi}/agregarEmpleado`, { datosEmpleado }, {headers: this.headers});
}

}

