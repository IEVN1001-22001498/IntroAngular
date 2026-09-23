import { Component } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  standalone: false,
  templateUrl: './usuarios.html',
})
export class Usuarios {
  usuarioCorrecto: string = 'paola';
  passwordCorrecto: string = '12345';

  usuarioIngresado: string = '';
  passwordIngresado: string = '';

  mensaje: string = '';

  validarAcceso(): void {
    if (this.usuarioIngresado !== this.usuarioCorrecto) {
      this.mensaje = "El nombre de usuario no es válido.";
    } else if (this.passwordIngresado !== this.passwordCorrecto) {
      this.mensaje = "La contraseña no es válida.";
    } else {
      this.mensaje = `Bienvenido al sistema, ${this.usuarioIngresado}.`;
    }
  }
}