import { environment } from 'enviroments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public headers: any;
  private JWT_TOKEN = 'token';

  constructor(private http:HttpClient, private router:Router) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json', //TIPO DE CONTENIDO JSON
      'Accept': 'application/json' //ACEPTA EL CUERPO DE LA PETICION JSON
    });

  }

    /**
 * @description: Método para registrar un nuevo usuario desde el Backend
 * @param idUsuario: string
 * @param contrasenia: string
 * @returns promise
 * @memberof: registrarme(): RgistrarmeComponent
 * @author: JMHB 18/02/2023
 */
  public registrarUsuario(idUsuario: string, contrasenia: string): Observable<any> {
    return this.http.post(`${window.location.protocol}//${environment.apiHost}${environment.apiPort}${environment.rutaApi}/login/registrar`, { idUsuario, contrasenia }, { headers: this.headers })
  }

    /**
* @description: Método para loguearse, validando los datos desde el Backend
* @param idUsuario: string
* @param contrasenia: string
* @returns promise
* @memberof: loguearUsuario() : LoginComponent
* @author: JMHB - 21/02/2023
*/
  public login(idUsuario: string, contrasenia: string): Observable<any> {
    return this.http.post(`${window.location.protocol}//${environment.apiHost}${environment.apiPort}${environment.rutaApi}/login/autenticar`, { idUsuario, contrasenia }, { headers: this.headers });
  }

}
