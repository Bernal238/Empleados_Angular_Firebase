import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { SnackBarService } from "./servicios/compartidos/snack-bar.service";

@Injectable()
export class DataServices{
    constructor(private hhtpClient:HttpClient, private snackBarService:SnackBarService){

    }

    guardarEmpleados(empleados:Empleado[]){
        console.log(empleados);        
        this.hhtpClient.post("https://empleados-fa92c-default-rtdb.firebaseio.com/datos.json", empleados).subscribe(
            response=>
                this.snackBarService.openSnackBar("Se registro el usuario con exito", "Ok"),
            error=>
                this.snackBarService.openSnackBar("Hubo un error al registrar el usuario. Error: " + error + ". Intenta nuevamente", "Ok"),            
        );
    }

    obetenerRegistros(){
        return this.hhtpClient.get("https://empleados-fa92c-default-rtdb.firebaseio.com/datos.json");
    }
}