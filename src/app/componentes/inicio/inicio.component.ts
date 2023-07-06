import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(private router:Router){

  }

  navEmpleados(){
    this.router.navigate(['empleados']);
  }

  navUsuarios(){
    this.router.navigate(['usuarios']);
  }

  navBitacoras(){
    this.router.navigate(['bitacoras']);
  }

  navCombustible(){
    this.router.navigate(['combustible']);
  }

  navUnidades(){
    this.router.navigate(['unidades']);
  }

}
