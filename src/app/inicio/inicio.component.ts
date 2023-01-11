import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { EmpleadosComponent } from '../empleados/empleados.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(private router:Router){

  }

  navEmpleado(){
    this.router.navigate(['empleados']);
  }

}
