import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IUsuarios } from 'src/app/modelos/Usuarios';
import { SnackBarService } from 'src/app/servicios/compartidos/snack-bar.service';
import { UsuariosService } from 'src/app/servicios/usuarios/usuarios.service';
import { PrivilegiosUsuariosComponent } from './privilegios-usuarios/privilegios-usuarios/privilegios-usuarios.component';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit{

  public matSpinner: boolean;
  public mostrarTabla: boolean;
  public arregloUsuarios: IUsuarios[] = [];
  public columnasTabla: string[];
  public dsInfoUsuarios: MatTableDataSource<IUsuarios> = new MatTableDataSource();
  @ViewChild('MatPaginatorUsuarios', {static: true}) paginatorListarUsuarios!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  public seleccion = new SelectionModel<any>(false, []);
  public infoUsuario!: IUsuarios;

  constructor(private router:Router, private serviceApi:UsuariosService, private snackBarService:SnackBarService, public dialog:MatDialog){
    this.matSpinner = false;
    this.mostrarTabla = true;
    this.columnasTabla = [
      'Usuario',
      'Nombre',
      'Puesto',
      'Turno'
    ];
  }

  ngOnInit() {
    this.obtenerUsuarios();
  }

  public obtenerUsuarios(): void{
    this.serviceApi.listarUsuarios().subscribe(
      (success) => {
        let estatus:number = success.estatus;
        // console.log(success.respuesta);
        switch(estatus){
          case 0:
            this.snackBarService.openSnackBar("¡Tabla vacía!", "Ok");
            break;
          case 1:
            this.snackBarService.openSnackBar("¡Tabla refrescada correctamente!", "Ok");
            this.arregloUsuarios = success.respuesta;
            this.dsInfoUsuarios = new MatTableDataSource(this.arregloUsuarios);
            this.dsInfoUsuarios.paginator = this.paginatorListarUsuarios;
            this.mostrarTabla = true;
            break;
          case -1:
            this.snackBarService.openSnackBar("¡Error al refrescar tabla!", "Ok");
            break;
        }
        this.seleccion = new SelectionModel<any>(false, []);
      },
      (error: Error) => {
        console.log(error);
        this.snackBarService.openSnackBar("Error API", "Ok");
      }
    );
  }

    /**
  * @description: Selecciona la información de un usuario
  * @param: row
  * @returns void
  * @memberof: SolicitudesComponent
  * @author: JMHB - 01/05/2023
  */
  public seleccionarCampo(row: IUsuarios):void{
    this.infoUsuario = row;
    // console.log("SELECCIONO: ", this.infoUsuario);
  }

    /**
  * @description: Abre modal para modificar privilegios de usuario
  * @param: row
  * @returns void
  * @memberof: SolicitudesComponent
  * @author: JMHB - 01/05/2023
  */
  modalPrivilegios():void{
    const modalPrivilegios = this.dialog.open(PrivilegiosUsuariosComponent, {
      width: '700px',
      height: '610px',
      data: this.infoUsuario
    });
    modalPrivilegios.afterClosed().subscribe((result:string) => {
      this.obtenerUsuarios();
      return result;
    })
  }


}


