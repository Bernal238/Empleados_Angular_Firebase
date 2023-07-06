import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as DayJs from 'dayjs';
import * as esMx from 'dayjs/locale/es'
import { Globals } from 'src/app/servicios/compartidos/globals';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [ Globals ]
})
export class MenuComponent {

  public idUsuario: string | null;
  public nombreCompleto: string | null;
  public puesto: string | null;
  public fecha: string | null;

  constructor(private router: Router, public globals:Globals){
    this.idUsuario = localStorage.getItem('idUsuario');
    this.nombreCompleto = localStorage.getItem('nombreCompleto');
    this.puesto = localStorage.getItem('puesto');
    this.fecha = "";
    DayJs.locale(esMx);
    setInterval(() => {
      this.fecha = DayJs().format('dddd, DD MMMM YYYY, h:mm:ss a'); //Martes, 30 de marazo de 2021, 05:33pm.
    }, 1);
  }

    /**
* @description: Método para cerrar sesión, elimina todo del localstorage y redirige al login.
* @param: N/A
* @returns void
* @memberof: button: cerrarSesion
* @author: Fernando Martínez - 17/09/2021
*/
  public cerrarSesion(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }

ngOnInit(): void {
  }

  /**
  * @description: Habilita o deshabilita el card para solicitar unidades
  * @param: N/A
  * @returns void
  * @memberof: card: Solicitar unidades
  * @author: JMHB 10/09/2022
  */
  public administrarUsuarios(): void {
    this.router.navigate(['empleados'])
  }

    /**
* @description: Método para ir al inicio.
* @param: N/A
* @returns void
* @memberof: button: inicio
* @author: Fernando Martínez - 17/09/2021
*/
  public inicio(): void {
    this.router.navigate(['inicio']);
  }
}
