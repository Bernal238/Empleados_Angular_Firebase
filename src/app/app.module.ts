import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogClose, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule} from '@angular/material/input';
import { DataServices } from './data.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EmpleadosService } from './empleados.service';
import { AltaEmpleadoComponent } from './componentes/alta-empleado/alta-empleado.component';
import { SnackBarService } from './servicios/compartidos/snack-bar.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoginComponent } from './componentes/login/login.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { RegistroUsuarioComponent } from './componentes/registro-usuario/registro-usuario.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatPseudoCheckboxModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { EmpleadosComponent } from './componentes/empleados/empleados.component';
import { BitacorasComponent } from './componentes/bitacoras/bitacoras.component';
import { CombustibleComponent } from './componentes/combustible/combustible.component';
import { ModalRegistroCombustibleComponent } from './componentes/combustible/modal-registro-combustible/modal-registro-combustible.component';
import { FechaPipe } from './pipes/fecha.pipe';
import { UnidadesComponent } from './componentes/unidades/unidades.component';
import { ModalRegistroUnidadComponent } from './componentes/unidades/modal-registro-unidad/modal-registro-unidad.component';
import { FolioEmergenciaComponent } from './componentes/bitacoras/registro-folio-emergencia/folio-emergencia.component';
import { PrivilegiosUsuariosComponent } from './componentes/usuarios/privilegios-usuarios/privilegios-usuarios/privilegios-usuarios.component';
import { InterceptorTokenService } from './servicios/compartidos/interceptor.token.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';

//COMPONENTES CREADOS
@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    InicioComponent,
    AltaEmpleadoComponent,
    LoginComponent,
    MenuComponent,
    RegistroUsuarioComponent,
    UsuariosComponent,
    BitacorasComponent,
    CombustibleComponent,
    ModalRegistroCombustibleComponent,
    FechaPipe,
    UnidadesComponent,
    ModalRegistroUnidadComponent,
    FolioEmergenciaComponent,
    PrivilegiosUsuariosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
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
    MatInputModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatDatepickerModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatTabsModule,
  ],
  providers: [
    EmpleadosService, DataServices, {provide: HTTP_INTERCEPTORS, useClass: InterceptorTokenService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
