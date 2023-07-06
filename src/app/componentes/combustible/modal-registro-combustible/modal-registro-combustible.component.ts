import { IEstaciones } from './../../../modelos/Combustible';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CombustibleService } from 'src/app/servicios/combustible/combustible.service';
import { SnackBarService } from 'src/app/servicios/compartidos/snack-bar.service';
import { IUnidades } from 'src/app/modelos/Combustible';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-modal-registro-combustible',
  templateUrl: './modal-registro-combustible.component.html',
  styleUrls: ['./modal-registro-combustible.component.css']
})
export class ModalRegistroCombustibleComponent implements OnInit {

  public formularioConmustible: FormGroup;
  public arregloUnidades: IUnidades[] = [];
  public arregloEstaciones: IEstaciones[] = [];
  public rendimiento: number = 0;
  public total: number = 0;
  public datosCombustible!: any[];
  public km_anterior:number = 0;

  constructor(public formBuilder:FormBuilder, private apiService:CombustibleService, public snackBarService:SnackBarService){
    this.formularioConmustible = this.formBuilder.group({
      "id_unidad": ["", Validators.required],
      "km_anterior": ["", Validators.required],
      "km_actual": ["", Validators.required],
      "rendimiento": ["", Validators.required],
      "fecha": ["", Validators.required],
      "litros": ["", Validators.required],
      "precio": ["", Validators.required],
      "total": ["" , Validators.required,],
      "id_estacion": ["", Validators.required]
    });
    this.datosCombustible = this.formularioConmustible.value;

  }



  ngOnInit(): void {
    this.obtenerEstaciones();
    this.obtenerUnidades();
  }

    /**
* @description: Método obtener todos los estaciones desde la api
* @param N/A
* @returns promise
* @memberof: constructor() : LinkComponente
* @author: JMHB - 13/03/2023
*/
  public obtenerEstaciones():void{
    this.apiService.listarEstaciones().subscribe(
      (success) => {
        let estatus:number = success.estatus;
        switch(estatus){
          case 0:
            this.snackBarService.openSnackBar("¡Sin datos!", "Ok");
            break;
          case 1:
            // this.snackBarService.openSnackBar("¡Datos obtenidos!", "Ok");
            this.arregloEstaciones = success.respuesta;
            // console.log(this.arregloEstaciones);
            break;
          case -1:
            this.snackBarService.openSnackBar("¡Error al obtener los datos!", "Ok");
            break;
        }
      },
      (error: Error) => {
        console.log(error);
        this.snackBarService.openSnackBar("Error API", "Ok");
      }
    );
  }

  /**
* @description: Método obtener todos las unidades desde la api
* @param N/A
* @returns promise
* @memberof: constructor() : LinkComponente
* @author: JMHB - 13/03/2023
*/
  public obtenerUnidades():void{
    this.apiService.listarUnidades().subscribe(
      (success) => {
        let estatus:number = success.estatus;
        switch(estatus){
          case 0:
            this.snackBarService.openSnackBar("¡Sin datos!", "Ok");
            break;
          case 1:
            // this.snackBarService.openSnackBar("¡Datos obtenidos unidades!", "Ok");
            this.arregloUnidades = success.respuesta;
            // console.log(this.arregloUnidades);
            break;
          case -1:
            this.snackBarService.openSnackBar("¡Error al obtener los datos!", "Ok");
            break;
        }
      },
      (error: Error) => {
        console.log(error);
        this.snackBarService.openSnackBar("Error API", "Ok");
      }
    );
  };

  public calcularTotal():void{
    let litros = this.formularioConmustible.get('litros')?.value;
    let precio = this.formularioConmustible.get('precio')?.value;
    this.total = Number(((litros) * (precio)).toFixed(2));
    // console.log("TOTAL: ",this.total);
  }

  public calcularRendimiento():void{
    let litros = this.formularioConmustible.get('litros')?.value;
    let km_actual = this.formularioConmustible.get('km_actual')?.value;
    let km_anterior = this.formularioConmustible.get('km_anterior')?.value;
    this.rendimiento = Number((((km_actual-km_anterior)/litros)).toFixed(2));
    // console.log("RENDIMIENTO: ", this.rendimiento);
  }

  public mostrar():void{
    console.log("SI ENTRE");
    console.log(this.formularioConmustible.value);
  }

  public ultimoKmUnidad():void{
    let id_unidad = this.formularioConmustible.get('id_unidad')?.value;
    // console.log("HOLA", id_unidad);
    this.apiService.listarUltimoKm(id_unidad).subscribe(
      (success) => {
        let estatus:number = success.estatus;
        switch(estatus){
          case 0:
            this.snackBarService.openSnackBar("¡No hay registro de Kilometraje!", "Ok");
            this.km_anterior = 1;
            break;
          case 1:
            this.snackBarService.openSnackBar("¡Kilomertaje obtenido con éxito!", "Ok");
            // console.log(success.respuesta[0].km_anterior);
            this.km_anterior = success.respuesta[0].km_anterior;
            break;
          case -1:
            this.snackBarService.openSnackBar("¡Ocurrio un error al obtener los datos!", "Ok");
            break;
        }
      },
      (error: Error) => {
        console.log(error);
        this.snackBarService.openSnackBar("¡Error API", "Ok");
      }
    );
  }

  public guardarRegistro():void{
    this.apiService.registroCombustible(this.formularioConmustible.value).subscribe(
      (success) => {
        let estatus:number = success.estatus;
        // console.log(success);
        // console.log(this.formularioConmustible.value);
        switch(estatus){
          case 1:
            this.snackBarService.openSnackBar("¡Ticket registrado correctamente!", "Ok");
            break;
          case -1:
            this.snackBarService.openSnackBar("¡Error al registrar ticket!", "Ok");
            break;
        }
      },
      (error: Error) => {
        console.log(error);
        this.snackBarService.openSnackBar("¡Error al registrar abastecimiento!", "Ok");
      }
    );
    console.log(this.formularioConmustible.value);

  }

  formatoFecha(): void{
    let fechaRegistro:string = this.formularioConmustible.get('fecha')?.value;
    //Se da formato a las fechas para que coincidan con el formato de la base de datos
    let fecha:Date = new Date(fechaRegistro);
    // console.log(fecha);
    fechaRegistro = fecha.getFullYear() + "-" + ("0" + (fecha.getMonth() + 1)).slice(-2) + "-" + ("0" + fecha.getDate()).slice(-2) + " 00:00:00.0";
  }


}

