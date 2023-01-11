import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataServices } from '../data.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-alta-empleado',
  templateUrl: './alta-empleado.component.html',
  styleUrls: ['./alta-empleado.component.css']
})

export class AltaEmpleadoComponent {
  public frmModal: FormGroup;
  
  
  empleados:Empleado[]=[];
  
  constructor(public formBuilder:FormBuilder, private dataService:DataServices){
    this.frmModal = this.formBuilder.group({
      "nombres": ["", Validators.required],
      "apellidoPaterno": ["", Validators.required],
      "apellidoMaterno": ["", Validators.required],
      "curp": ["", Validators.required],
      "rfc": ["", Validators.required],
      "telefono": ["", Validators.required],
    })
  }

  agregarEmpleado(){
    // let empleado = new Empleado(this.frmModal.value.nombres,
    //   this.frmModal.value.apellidoPaterno,
    //   this.frmModal.value.apellidoMaterno,
    //   this.frmModal.value.curp,
    //   this.frmModal.value.rfc,
    //   this.frmModal.value.telefono);
      // this.empleados.push(empleado)
      console.log(this.empleados);
      this.dataService.guardarEmpleados(this.frmModal.value);
    
  }

}
