import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUsuarios } from 'src/app/modelos/Usuarios';

@Component({
  selector: 'app-privilegios-usuarios',
  templateUrl: './privilegios-usuarios.component.html',
  styleUrls: ['./privilegios-usuarios.component.css']
})
export class PrivilegiosUsuariosComponent {


  constructor(@Inject(MAT_DIALOG_DATA) public data:any){
    console.log(data);



  }


}
