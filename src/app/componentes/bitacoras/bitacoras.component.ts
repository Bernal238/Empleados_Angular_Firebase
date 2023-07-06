import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FolioEmergenciaComponent } from './registro-folio-emergencia/folio-emergencia.component';

@Component({
  selector: 'app-bitacoras',
  templateUrl: './bitacoras.component.html',
  styleUrls: ['./bitacoras.component.css']
})
export class BitacorasComponent {

  constructor(private router:Router, public modal:MatDialog){

  }

  modalCrearFolio(){
    const modal = this.modal.open(FolioEmergenciaComponent, {
      width: '700px',
      height: '610px',
      disableClose: true
    });
    modal.afterClosed().subscribe(result => {
      console.log('Se cerro el modal de registro de crear folio');
    });
  }

}
