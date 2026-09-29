import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.html',
  styleUrls: ['./cinepolis.css']
})
export class Cinepolis {
  nombre: string = '';
  cantidadCompradores: number = 1;
  cantidad: number = 1;
  tarjeta: boolean = false;
  resultado: string = '';

  procesar() {
    const maxBoletasPermitidas = this.cantidadCompradores * 7;

    if (this.cantidad < 1 || this.cantidad > maxBoletasPermitidas) {
      this.resultado = `Error: Máx. ${maxBoletasPermitidas} boletas`;
      return;
    }

    const valorBoleto = 12;
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
    this.resultado = `$${valorDescuento.toFixed(2)}`;
  }

  limpiar() {
    this.nombre = '';
    this.cantidadCompradores = 1;
    this.cantidad = 1;
    this.tarjeta = false;
    this.resultado = '';
  }
}