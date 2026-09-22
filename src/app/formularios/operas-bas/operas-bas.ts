import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.html',
})
export class OperasBas {
  num1: string = '';
  num2: string = '';
  tipoOperacion: string = '';
  resultado: number = 0;

  calcular(): void {
    const n1 = parseFloat(this.num1) || 0;
    const n2 = parseFloat(this.num2) || 0;

    switch (this.tipoOperacion) {
      case 'sumar':
        this.resultado = n1 + n2;
        break;
      case 'restar':
        this.resultado = n1 - n2;
        break;
      case 'multiplicar':
        this.resultado = n1 * n2;
        break;
      case 'dividir':
        this.resultado = n2 !== 0 ? n1 / n2 : 0;
        break;
      default:
        this.resultado = 0;
        break;
    }
  }
}