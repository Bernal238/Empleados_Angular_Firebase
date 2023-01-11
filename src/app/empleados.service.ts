import { Injectable } from "@angular/core";
import { Empleado } from "src/app/empleado.model";
import { DataServices } from "./data.service";

@Injectable()
export class EmpleadosService{

    constructor(private dataService:DataServices){

    }

    empleados:Empleado[]=[];

    agregarEmpleadoServicio(empleado:Empleado){
        // this.empleados.push(empleado);
        this.dataService.guardarEmpleados(this.empleados);
    }

    obtenerEmpleados(){
        return this.dataService.obetenerRegistros();//DEVUELVE UN OBSERVABLE
    }
}


















