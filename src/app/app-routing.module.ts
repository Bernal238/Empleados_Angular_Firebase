import { ModalRegistroUnidadComponent } from './componentes/unidades/modal-registro-unidad/modal-registro-unidad.component';
import { ModalRegistroCombustibleComponent } from './componentes/combustible/modal-registro-combustible/modal-registro-combustible.component';
import { CombustibleComponent } from './componentes/combustible/combustible.component';
import { BitacorasComponent } from './componentes/bitacoras/bitacoras.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './componentes/empleados/empleados.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { RegistroUsuarioComponent } from './componentes/registro-usuario/registro-usuario.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { UnidadesComponent } from './componentes/unidades/unidades.component';
import { FolioEmergenciaComponent } from './componentes/bitacoras/registro-folio-emergencia/folio-emergencia.component';
import { PrivilegiosUsuariosComponent } from './componentes/usuarios/privilegios-usuarios/privilegios-usuarios/privilegios-usuarios.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'empleados', component: EmpleadosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registrarme', component: RegistroUsuarioComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'bitacoras', component: BitacorasComponent},
  {path: 'combustible', component: CombustibleComponent},
  {path: 'registro-combustible', component: ModalRegistroCombustibleComponent},
  {path: 'unidades', component: UnidadesComponent},
  {path: 'registro-unidad', component: ModalRegistroUnidadComponent},
  {path: 'folio-emergencia', component: FolioEmergenciaComponent},
  {path: 'privilegios-usuarios', component: PrivilegiosUsuariosComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }
