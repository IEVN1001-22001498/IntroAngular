import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.html',
})
export class Cinepolis {
  nombre: string = '';
  cantidad: number = 1;
  tarjeta: boolean = false;
  resultado: string = '';

  calcular() {
    if (this.cantidad > 7 || this.cantidad < 1) {
      this.resultado = 'Error: Solo se pueden comprar de 1 a 7 boletos';
      return;
    }

    const valorBoleto = 12000;
    let subtotal = this.cantidad * valorBoleto;
    let descuentoPorcentaje = 0;

    if (this.cantidad > 5) {
      descuentoPorcentaje = 0.15; 
    } else if (this.cantidad >= 3 && this.cantidad <= 5) {
      descuentoPorcentaje = 0.10; 
    } else {
      descuentoPorcentaje = 0;    
    }

    let valorDescuento = subtotal * (1 - descuentoPorcentaje);

    if (this.tarjeta) {
      valorDescuento *= 0.90;
    }

    this.resultado = `Comprador: ${this.nombre} Boletos: ${this.cantidad} Total a pagar: $${valorDescuento}`;
  }
}
