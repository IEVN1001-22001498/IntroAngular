import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title = "AZAMORA";

  duplicarNumero(n1:number):number{
    return n1*2
  }

  pelicula={
    titulo:'Spider Man',
    fechaLanzamiento:new Date(),
    precio:1234
    
  }
}
