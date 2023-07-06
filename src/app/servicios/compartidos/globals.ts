import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PrivilegiosService } from '../privilegios/privilegios.service';

@Injectable()

export class Globals{
  public privilegioRegistroEmpleado:boolean;
  public privilegioRegistroUnidades:boolean;
  public privilegioRegistroCombustible:boolean;
  public privilegioRegistroFolio:boolean;
  public privilegioModificarPrivilegios:boolean;

  constructor(public router:Router, public servicePrivilegios:PrivilegiosService){
    this.privilegioRegistroEmpleado = false;
    this.privilegioRegistroUnidades = false;
    this.privilegioRegistroCombustible = false;
    this.privilegioRegistroFolio = false;
    this.privilegioModificarPrivilegios = false;

    let id_personal:number = Number(localStorage.getItem('idUsuario'));
    this.servicePrivilegios.privilegiosPorUsuario(id_personal).subscribe(
      (success) => {
        console.log(success.respuesta);
      }
    );
  }


}
