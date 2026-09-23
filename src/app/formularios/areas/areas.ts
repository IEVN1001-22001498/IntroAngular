import { Component } from '@angular/core';

@Component({
  selector: 'app-areas',
  standalone: false,
  templateUrl: './areas.html',
})
export class FigurasComponent {
  tipoFigura: string = '';
  valor1: string = '';
  valor2: string = '';
  resultado: number = 0;

  calcularArea(): void {
    const v1 = parseFloat(this.valor1);
    const v2 = parseFloat(this.valor2);

    switch (this.tipoFigura) {
      case 'cuadrado':
        this.resultado = v1 * v1;
        break;
      
      case 'rectangulo':
        this.resultado = v1 * v2;
        break;
      
      case 'circulo':
        this.resultado = Math.PI * (v1 * v1);
        break;
      
      case 'pentagono':
        this.resultado = (v1 * v2) / 2;
        break;
        
      default:
        this.resultado = 0;
        break;
    }
  }
}