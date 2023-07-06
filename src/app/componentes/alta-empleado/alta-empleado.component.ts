import { SnackBarService } from '../../servicios/compartidos/snack-bar.service';
import { InfoEmpleados, ITurnos, IPuestos } from '../../modelos/Usuarios';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataServices } from '../../data.service';
import { EmpleadoService } from '../../servicios/empleados/empleados.service';

@Component({
  selector: 'app-alta-empleado',
  templateUrl: './alta-empleado.component.html',
  styleUrls: ['./alta-empleado.component.css']
})

export class AltaEmpleadoComponent implements OnInit {
  public frmModal: FormGroup;
  public datosEmpleado!: any[];
  public arregloTurnos: ITurnos[];
  public arregloPuestos: IPuestos[];


  empleados:InfoEmpleados[]=[];

  constructor(public formBuilder:FormBuilder, private apiService:EmpleadoService, public snackBarService:SnackBarService){
    this.frmModal = this.formBuilder.group({
      "nomina": ["", Validators.required],
      "nombres": ["", Validators.required],
      "apellidoPaterno": ["", Validators.required],
      "apellidoMaterno": ["", Validators.required],
      "idPuesto": ["", Validators.required],
      "idTurno": ["", Validators.required],
    });
    this.arregloTurnos = [{idTurno: 1, nombreTurno: 'OFICINA'}, {idTurno: 2, nombreTurno: 'TURNO A'}, {idTurno: 3, nombreTurno: 'TURNO B'}, {idTurno: 4, nombreTurno: 'TURNO C'}];
    this.arregloPuestos = [{idPuesto: 1, nombrePuesto: 'PARAMÉDICO'}, {idPuesto: 2, nombrePuesto: 'BOMBERO ESPECIALIZADO'}, {idPuesto: 3, nombrePuesto: 'SUBTENIENTE'}, {idPuesto: 4, nombrePuesto: 'TENIENTE'}, {idPuesto: 7, nombrePuesto: 'COORDINADOR DE TURNO'}];
  }

  public agregarEmpleado(): void{
    this.apiService.agregarEmpleado(this.frmModal.value).subscribe(
      (success) => {
        let estatus:number = success.estatus;
        console.log(success);
        switch (estatus){
          case 1:
            this.snackBarService.openSnackBar("Empleado registrado correctamente", "Ok");
            this.frmModal.reset();
            break;
          case -1:
            this.snackBarService.openSnackBar("¡El empleado ya se encuentra registrdo!", "Ok");
            this.frmModal.reset();
            break;
        }
      },
      (error: Error) => {
        console.log(error);
        this.snackBarService.openSnackBar("¡Error al registar empleado!", "Ok");
      }
    );
      // console.log(this.frmModal.value);
  }

  ngOnInit() {

  }

}
