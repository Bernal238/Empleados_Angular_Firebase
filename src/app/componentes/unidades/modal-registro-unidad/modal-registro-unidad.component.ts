import { ITipoUnidad, ITipoCombustible } from './../../../modelos/Unidades';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UnidadesService } from 'src/app/servicios/unidades/unidades.service';
import { SnackBarService } from 'src/app/servicios/compartidos/snack-bar.service';

@Component({
  selector: 'app-modal-registro-unidad',
  templateUrl: './modal-registro-unidad.component.html',
  styleUrls: ['./modal-registro-unidad.component.css']
})
export class ModalRegistroUnidadComponent implements OnInit {

  public formularioUnidades: FormGroup;
  public arregloTipoUnidad:ITipoUnidad[] = [];
  public arregloTipoCombustible:ITipoCombustible[] = [];
  public datosUnidad!: any[];

  constructor(public formBuilder:FormBuilder, private apiService:UnidadesService, public snackBarService:SnackBarService){
    this.formularioUnidades = formBuilder.group({
      "nombre_unidad": ["", Validators.required],
      "tipo_unidad": ["", Validators.required],
      "niv": ["", Validators.required],
      "placas": ["", Validators.required],
      "tipo_combustible": ["", Validators.required]
    });
  }

  ngOnInit():void{
    this.obtenerTipoUnidades();
    this.obtenerTipoCombustible();
  }

    /**
* @description: Método obtener todos las unidades desde la api
* @param N/A
* @returns promise
* @memberof: constructor() : LinkComponente
* @author: JMHB - 13/03/2023
*/
  public obtenerTipoUnidades():void{
    this.apiService.listarTiposUnidades().subscribe(
      (success) => {
        let estatus:number = success.estatus;
        switch(estatus){
          case 0:
            this.snackBarService.openSnackBar("¡Sin datos!", "Ok");
            break;
          case 1:
            this.snackBarService.openSnackBar("¡Datos obtenidos tipo unidades!", "Ok");
            this.arregloTipoUnidad = success.respuesta;
            console.log(this.arregloTipoUnidad);
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

      /**
* @description: Método obtener todos los tipos de combustible
* @param N/A
* @returns promise
* @memberof: constructor() : LinkComponente
* @author: JMHB - 13/03/2023
*/
  public obtenerTipoCombustible():void{
    this.apiService.listarTiposCombustible().subscribe(
      (success) => {
        let estatus:number = success.estatus;
        switch(estatus){
          case 0:
            this.snackBarService.openSnackBar("¡Sin datos!", "Ok");
            break;
          case 1:
            this.snackBarService.openSnackBar("¡Datos obtenidos tipo combustible!", "Ok");
            this.arregloTipoCombustible = success.respuesta;
            console.log(this.arregloTipoCombustible);
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

  public verDatos(){
    console.log(this.formularioUnidades.value);

    // this.formularioUnidades.value;
  }



}
