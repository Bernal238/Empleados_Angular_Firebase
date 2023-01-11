import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EmpleadosComponent } from './empleados/empleados.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioComponent } from './inicio/inicio.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule} from '@angular/material/input';
import { DataServices} from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { EmpleadosService } from './empleados.service';
import { AltaEmpleadoComponent } from './alta-empleado/alta-empleado.component';
import { SnackBarService } from './servicios/compartidos/snack-bar.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



//COMPONENTES CREADOS
@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    InicioComponent,
    AltaEmpleadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    NgbModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule, 
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatIconModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatTableModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    EmpleadosService, DataServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
