import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-folio-emergencia',
  templateUrl: './folio-emergencia.component.html',
  styleUrls: ['./folio-emergencia.component.css']
})
export class FolioEmergenciaComponent {

  public formularioRegistroFolio: FormGroup;

  constructor(public formBuilder:FormBuilder){
    this.formularioRegistroFolio = this.formBuilder.group({
      "fecha": ["", Validators.required],
      "folio_911": ["", Validators.required],
      "folio_estacion": ["", Validators.required],
      "calle": ["", Validators.required],
      "numeral": ["", Validators.required],
      "cruce": ["", Validators.required],
      "colonia": ["", Validators.required],
      "reportante": ["", Validators.required],
      "telefono": ["", Validators.required],
      "id_unidad": ["", Validators.required],
      "tipo_servicio": ["", Validators.required],
      "id_estacion": ["", Validators.required]
    });
  }


}
