import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AltaEmpleadoComponent } from '../alta-empleado/alta-empleado.component';
import { DataServices } from '../data.service';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { SnackBarService } from '../servicios/compartidos/snack-bar.service';
import { InfoEmpleados } from '../modelos/Usuarios';
import { MatTableDataSource } from '@angular/material/table';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  public matSpinner: boolean;
  public mostrarTabla: boolean;
  public arregloEmpleados: InfoEmpleados[] = [];
  empleados: Empleado[] = [];//ARREGLO QUE CONTIENE A LOS EMPLEADOS
  columnasTabla: string[];//CONTIENE LOS NOMBRES DE LAS COLUMNAS

  constructor(public dialog: MatDialog, private empleadoService: EmpleadosService, private snackBarService: SnackBarService) {
    this.columnasTabla = [
      'Nombres',
      'Apellido Paterno',
      'Apellido Materno',
      'Curp',
      'RFC',
      'Telefono'
    ];
    this.matSpinner=false;
    this.mostrarTabla=true;
  }

  ngOnInit() {
    this.empleadoService.obtenerEmpleados().subscribe(empleados => {
      this.empleados = Object.values(empleados);
      console.log(this.empleados);

    }
    );

  }


  modalAltaEmpleados(): void {
    const dialogRef = this.dialog.open(AltaEmpleadoComponent, {
      width: '800px',
      height: '410px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Se cerro modal de registro`);
    });
  }

  actualizarTabla():void{
    this.matSpinner = true;
    this.mostrarTabla=false;
    this.empleadoService.obtenerEmpleados().pipe(finalize(() => this.matSpinner = false)).pipe(finalize(() => this.mostrarTabla = true)).subscribe(
      response =>
        this.snackBarService.openSnackBar("Tabla actualizada", "Ok"),
        error =>
          this.snackBarService.openSnackBar("Hubo un error al actualizar la tabla. Error: " + error + ". Intenta nuevamente", "Ok"),   
    );
  }



}
