import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackBarService } from 'src/app/servicios/compartidos/snack-bar.service';
import { LoginService } from 'src/app/servicios/login/login.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent {

  public frmRegistro: FormGroup;
  public hide: boolean;
  public hideConfirma: boolean;

  constructor(public formBuilder:FormBuilder, private router:Router, private loginService:LoginService, private snackBarService:SnackBarService){
    this.hide = true;
    this.hideConfirma = true;
    this.frmRegistro = this.formBuilder.group({
      idUsuario: ["", Validators.required],
      contrasenia: ["", Validators.required],
      contraseniaConfirma: ["", Validators.required]
    });
  }

  /**
* @description: Envia los datos del usuario para registrarse
* @param: N/A
* @returns void
* @memberof: button: Registrarme
* @author: JMHB 18/02/2023
*/
  public registrar(): void {
    const idUsuario: string = this.frmRegistro.get("idUsuario")?.value;
    const contrasenia: string = this.frmRegistro.get("contrasenia")?.value;
    const contraseniaConfirma: string = this.frmRegistro.get("contraseniaConfirma")?.value;
    if( contrasenia === contraseniaConfirma){
      this.loginService.registrarUsuario(idUsuario, contrasenia).subscribe(
        (success) => {
          let estatus:number = success.estatus;
          switch(estatus){
            case 1:
              this.snackBarService.openSnackBar("¡Usuario registrado correctamente!","Ok");
              this.router.navigate(['/login']);
              break;
            case 2:
              this.snackBarService.openSnackBar("¡Error al registrarse, verifica los datos!", "Ok")
              break;
          }
        },
        (error: Error) => {
          console.log(error);
          this.snackBarService.openSnackBar("¡Error al registrarse!", "Ok")
        }
      );
    }else{
      this.snackBarService.openSnackBar("¡Las contraseñas no coinciden!", "Ok");
    }
  }



}
