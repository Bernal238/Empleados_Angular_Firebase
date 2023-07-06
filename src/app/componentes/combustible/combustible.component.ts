import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalRegistroCombustibleComponent } from './modal-registro-combustible/modal-registro-combustible.component';
import { ITicket } from 'src/app/modelos/Combustible';
import { MatPaginator } from '@angular/material/paginator';
import { CombustibleService } from 'src/app/servicios/combustible/combustible.service';
import { SnackBarService } from 'src/app/servicios/compartidos/snack-bar.service';

@Component({
  selector: 'app-combustible',
  templateUrl: './combustible.component.html',
  styleUrls: ['./combustible.component.css']
})
export class CombustibleComponent implements OnInit{

  public matSpinner: boolean;
  public mostrarTabla: boolean;
  public columnasTabla : string[];
  public arregloTickets: ITicket[] = [];
  public dsInfoTickets: MatTableDataSource<ITicket> = new MatTableDataSource();
  @ViewChild('MatPagintorTickest', {static: true}) paginatorListarTcikets!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  public idTicket: number = 0;
  public seleccion = new SelectionModel<any>(false, []);
  //Variable para guardar la información de la solicitud seleccionada de la tabla
  public infoTicket! : ITicket;
  public frmModal: FormGroup;
  public range = new FormGroup ({
    start: new FormControl(),
    end: new FormControl(),
  });

  constructor(private router:Router, public modal:MatDialog, private apiService:CombustibleService, private snackBarService: SnackBarService, public formBuilder:FormBuilder){
    this.matSpinner = false;
    this.mostrarTabla = true;
    this.columnasTabla = [
      'ID',
      'Unidad',
      'Fecha',
      'Km. Anterior',
      'Km. Actual',
      'Estacion'
    ];
    this.frmModal = this.formBuilder.group({
      "busqueda": ["", Validators.required]
    });


    this.range.get('start')?.setValue(new Date);
    this.range.get('end')?.setValue(new Date);

  }

  ngOnInit(): void {
    this.obtenerTickets();
  }

  public modalRegistroCombustible(){
    const modal = this.modal.open(ModalRegistroCombustibleComponent, {
      width: '900px',
      height: '710px'
    });
    modal.afterClosed().subscribe(result => {
      console.log('Se cerro el modal de registro de combustible');

    });
  }

  public obtenerTickets(): void {
    this.apiService.listarTickets().subscribe(
      (success) => {
        let estatus: number = success.estatus;
        console.log(success.respuesta);
        switch(estatus){
          case 0:
            this.snackBarService.openSnackBar("¡Tabla vacia!", "Ok");
              break;
          case 1:
            this.snackBarService.openSnackBar("¡Tabla refresacada correctamente!", "Ok");
            this.mostrarTabla = true;
            this.arregloTickets = success.respuesta;
            this.dsInfoTickets = new MatTableDataSource(this.arregloTickets);
            this.dsInfoTickets.paginator = this.paginatorListarTcikets;
            console.log(this.dsInfoTickets);
            break;
          case -1:
            this.snackBarService.openSnackBar("¡Error al refrescar la tabla!", "Ok");
            break;
        }
        this.seleccion = new SelectionModel<any>(false, []);
      },
      (error: Error) => {
        console.log(error);
        this.snackBarService.openSnackBar("¡Error API", "Ok")
      }
    );
  }

    /**
    * @description: Selecciona la información de un ticket
    * @param: row
    * @returns void
    * @memberof: SolicitudesComponent
    * @author: JMHB - 20/03/2023
    */
    public seleccionarTicket(row: ITicket): void {
        this.infoTicket = row;
        console.log(this.infoTicket);

    }


    /**
    * @description: Abre el modal para revisar el ticket
    * @param: N/A
    * @returns void
    * @memberof: mat-row: dblclick
    * @author: Joan Castañeda - 22/09/2022
    */
    public openDialogModalRevisarSolicitud(): void {
        // const dialogRef = this.dialog.open(ModalRevisarSolicitudComponent, {
        // width: '720px',
        // data: this.infoSolicitud
        // });

        // dialogRef.afterClosed().subscribe(() => {
        //     this.mostrarSolicitudes();
        //   });
    }

    obtenerFechas():void{
      let fechaInicio:string = this.range.get('start')?.value;
      let fechaFin:string = this.range.get('end')?.value;

      console.log(fechaInicio);
      console.log(fechaFin);



      if(fechaInicio === null || fechaFin === null){
        this.snackBarService.openSnackBar("¡Selecciona un rango de fechas valido!", "Ok");
      }

      //Se da formato a las fechas para que coincidan con el formato de la base de datos
      let fecha: Date = new Date(fechaInicio);
      fechaInicio = fecha.getFullYear() + "-" + ("0" + (fecha.getMonth() + 1)).slice(-2) + "-" + ("0" + fecha.getDate()).slice(-2) + " 00:00:00.0";
      fecha = new Date(fechaFin);
      fechaFin = fecha.getFullYear() + "-" + ("0" + (fecha.getMonth() + 1)).slice(-2) + "-" + ("0" + fecha.getDate()).slice(-2) + " 23:59:59.0";

      console.log("FECHAS: ", fechaInicio, fechaFin);
    }


}
