import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'empleados';

  constructor(private router: Router){

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
  public goEmpleados(): void {
    this.router.navigate(['empleados'])
  }

}
