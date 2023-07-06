import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AltaEmpleadoComponent } from '../alta-empleado/alta-empleado.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { InfoEmpleados } from 'src/app/modelos/Usuarios';
import { EmpleadosService } from 'src/app/empleados.service';
import { SnackBarService } from 'src/app/servicios/compartidos/snack-bar.service';
import { EmpleadoService } from 'src/app/servicios/empleados/empleados.service';

const etiquetaRango = (page: number, pageSize: number, length: number) => {
    if (length == 0 || pageSize == 0) { //caso paginador vacio
      return `0 de ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize; //indice de inicio

    /*if ternario; si el indice de inicio excede la logitud de la lista (6 - 5 de 6 por ejemplo) se veria: 6 - 10 de 6 gracias al
    [pageSizeOptions] lo cual es incorrecto pues solo hay 6 elementos en tal rango ENTONCES mejor coloca como indice final el indice inicial
    quedaria 6 - 6 de 6 que es lo correcto).*/
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} de ${length}`;
  }

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  public matSpinner: boolean;
  public mostrarTabla: boolean;
  public arregloEmpleados: InfoEmpleados[] = [];
  public columnasTabla: string[];//CONTIENE LOS NOMBRES DE LAS COLUMNAS
  //mattable para la información de la persona que a realizado solicitudes de prestamo
  public dsInfoEmpleados: MatTableDataSource<InfoEmpleados> = new MatTableDataSource();
  @ViewChild('MatPaginatorEmpleados', {static: true}) paginatorListarEmpleados!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  public idEmpleadoSeleccionado: number = 0; //ALMACENARA EL ID DE UN EMPLEADO QUE SE SELECCIONE
  public seleccion = new SelectionModel<any>(false, []);
  //variable para gusradr la informacion del campo seleccionado
  public infoEmpleado!: InfoEmpleados;


  constructor(public dialog: MatDialog, private snackBarService: SnackBarService, private serviceApi: EmpleadoService) {
    this.columnasTabla = [
      'Nomina',
      'Nombres',
      'Apellido Paterno',
      'Apellido Materno',
      'Turno',
      'Estatus'
    ];
    this.matSpinner=false;
    this.mostrarTabla=true;
  }

  ngOnInit() {
    this.obtenerEmpleados();
  }


  modalAltaEmpleados(): void {
    const dialogRef = this.dialog.open(AltaEmpleadoComponent, {
      width: '700px',
      height: '610px',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Se cerro modal de registro`);
    });
  }

    /**
* @description: Metodo para mostrar todos los empelados obtenidos de la BD
* @param: N/A
* @returns void
* @memberof: ngOnInit()
* @author: Fernando Martínez - 21/09/2021
*/
  public obtenerEmpleados(): void {
    this.serviceApi.listarEmpleados().subscribe(
      (success) => {
        let estatus: number = success.estatus;
        switch(estatus) {
          case 0:
            this.snackBarService.openSnackBar("¡Tabla vacía!", "Ok");
            break;
          case 1:
            this.snackBarService.openSnackBar("¡Tabla refrescada correctamente!", "Ok");
            this.arregloEmpleados = success.respuesta;
            this.dsInfoEmpleados = new MatTableDataSource(this.arregloEmpleados);
            this.dsInfoEmpleados.paginator = this.paginatorListarEmpleados;
            this.mostrarTabla = true;
            break;
          case -1:
            this.snackBarService.openSnackBar("¡Error al refrescar tabla!", "Ok");
            break;
        }
        this.seleccion = new SelectionModel<any>(false, []);
      },
      (error: Error) => {
        console.error(error);
        this.snackBarService.openSnackBar("Error API", "Ok");

      }
    );
  }

/**
* @description: Ordenar la información de las colmnas de la tabla de manera asc o desc
* @param {Sort} sort instancia para dar uso del ordenamiento en el mat-table
* @returns: void
* @memberof: N/A
* @author: JMHB 07/03/2023
*/
  public ordenarInformacion(sort: Sort): void {
    const informacion = this.arregloEmpleados.slice();
    if (!sort.active || sort.direction === '') { // si no se presiona el boton de ordenar o no se especifica como se va a ordenar devolvemos en arreglo igual a la tabla.
      this.dsInfoEmpleados = new MatTableDataSource(informacion);
      this.dsInfoEmpleados.paginator = this.paginatorListarEmpleados;
      // this.dsInfoEmpleados.paginator._intl.itemsPerPageLabel = 'Registros por pagina';
      // this.dsInfoEmpleados.paginator._intl.getRangeLabel = etiquetaRango;
      return;
    }
  }


  /**
  * @description: Selecciona la información de un empleado
  * @param: row
  * @returns void
  * @memberof: SolicitudesComponent
  * @author: Joan Castañeda - 22/09/2022
  */
 public seleccionarCampo(row: InfoEmpleados):void{
  this.infoEmpleado = row;
  console.log("SELECCIONO: ", this.infoEmpleado);
 }
}
