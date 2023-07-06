import { IRespuestaLogin } from 'src/app/modelos/Login';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/servicios/login/login.service';
import { SnackBarService } from 'src/app/servicios/compartidos/snack-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public frmLogin: FormGroup;
  public hide: boolean;

  constructor(public formBuilder:FormBuilder, private router:Router, private loginService:LoginService, private snackBarService:SnackBarService, public open:MatDialog ){
    this.hide = true;
    this.frmLogin = this.formBuilder.group({
      idUsuario: ["", Validators.required],
      contrasenia: ["", Validators.required]
    });

  }

    /**
* @description: Recupera y envia los datos del usuario para iniciar sesión
* @param: N/A
* @returns void
* @memberof: button: Entrar
* @author: JMHB 21/02/2023
*/
  public loguearUsuario(): void {
    let idUsuario: string = this.frmLogin.get("idUsuario")?.value;
    let contrasenia: string = this.frmLogin.get("contrasenia")?.value;
    // console.log(idUsuario, contrasenia);
    this.loginService.login(idUsuario, contrasenia).subscribe(
      (success: IRespuestaLogin) => {
        // console.log("Respuesta: ", success);
        let estatus: number = success.estatus;
        // console.log(success.estatus);
        switch(estatus){
          case 0:
            this.snackBarService.openSnackBar("¡El usuario no se encuentra en el sistema, verifica los datos!","Ok");
            break;
          case 1:
            this.snackBarService.openSnackBar("¡Se inicio sesión correctamente!","Ok");
            // console.log(success.respuesta);
            localStorage.setItem("token", success.respuesta.token);
            localStorage.setItem("nombreCompleto", success.respuesta.nombreCompleto);
            localStorage.setItem("idUsuario", success.respuesta.idUsuario);
            localStorage.setItem("idBombero", success.respuesta.idBombero);
            localStorage.setItem("puesto", success.respuesta.puesto);
            if(localStorage.getItem("token") != "undefined"){
              this.router.navigate(['/inicio'])
            }
            break;
          case -1:
            this.snackBarService.openSnackBar("¡Error al iniciar sesión!","Ok");
            break;
        }
      },
      (error: Error) => {
        console.error(error);
        this.snackBarService.openSnackBar("¡Error al iniciar sesión!", "Ok");
      }
    );

  }

}
