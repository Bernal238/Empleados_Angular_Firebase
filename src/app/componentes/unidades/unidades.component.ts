import { SelectionModel } from '@angular/cdk/collections';
import { RegistroUsuarioComponent } from './../registro-usuario/registro-usuario.component';
import { ModalRegistroUnidadComponent } from './modal-registro-unidad/modal-registro-unidad.component';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UnidadesService } from 'src/app/servicios/unidades/unidades.service';
import { IUnidades } from 'src/app/modelos/Unidades';
import { MatTableDataSource } from '@angular/material/table';
import { SnackBarService } from 'src/app/servicios/compartidos/snack-bar.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.css']
})
export class UnidadesComponent {

  public matSpinner: boolean;
  public mostrarTabla: boolean;
  public columnasTabla: string[];
  public arregloUnidades: IUnidades[] = [];
  public dsInfoUnidades: MatTableDataSource<IUnidades> = new MatTableDataSource();
  @ViewChild('MatPaginatorUnidades', {static: true}) paginatorListarUnidades!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  public seleccion = new SelectionModel<any>(false, []);
  public infoUnidad!: IUnidades;

  constructor(private router:Router, public modal:MatDialog, private apiService:UnidadesService, public snackBarService:SnackBarService){
    this.matSpinner = false;
    this.mostrarTabla = true;
    this.columnasTabla = [
      'id',
      'nombre',
      'estatus',
      'tipo'
    ];
  }

  ngOnInit():void{
    this.obtenerUnidades();
  }

  public modalRegistroUnidad(){
    const modal = this.modal.open(ModalRegistroUnidadComponent, {
      width: '700px',
      height: '460px'
    });
    modal.afterClosed().subscribe(result => {
      console.log('Se cerro el modal de registro de unidad');
    });
  }

  public obtenerUnidades():void{
    this.apiService.listarDetallesUnidades().subscribe(
      (success) => {
        let estatus:number = success.estatus;
        console.log(success.respuesta);
        switch(estatus){
          case 0:
            this.snackBarService.openSnackBar("¡Tabla vacia!", "Ok");
            break;
          case 1:
            this.snackBarService.openSnackBar("¡Tabla refresacada correctamente!", "Ok");
            this.mostrarTabla = true;
            this.arregloUnidades = success.respuesta;
            this.dsInfoUnidades = new MatTableDataSource(this.arregloUnidades);
            this.dsInfoUnidades.paginator = this.paginatorListarUnidades;
            console.log(this.dsInfoUnidades);
            break;
          case -1:
            this.snackBarService.openSnackBar("¡Error al refrescar la tabla!", "Ok");
            break;
        }
        this.seleccion = new SelectionModel<any>(false, []);
      },
      (error:Error) => {
        console.log(error);
        this.snackBarService.openSnackBar("¡Error API!", "Ok");
      }
    );
  }

    /**
    * @description: Selecciona la información de una unidad
    * @param: row
    * @returns void
    * @memberof: SolicitudesComponent
    * @author: JMHB - 20/03/2023
    */
    public seleccionarUnidad(row: IUnidades): void {
        this.infoUnidad = row;
        console.log(this.infoUnidad);

    }

}
