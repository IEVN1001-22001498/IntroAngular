import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  standalone: false,
  templateUrl: './palindromo.html',
})
export class Palindromo {
  frase: string = '';
  
  resultadoVocales: string = '';
  listaVocales: string = '';
  resultadoConsonantes: string = '';
  listaConsonantes: string = '';
  resultadoPalindromo: string = '';

  analizarFrase(): void {
    let contVocales = 0;
    let vocalesEncontradas: string[] = [];
    let contConsonantes = 0;
    let consonantesEncontradas: string[] = [];

    let caracteres = this.frase.split('');
    let longitud = caracteres.length;

    for (let i = 0; i < longitud; i++) {
      let c = caracteres[i];
      let cMin = this.aMinuscula(c);

      let esVocal = (
        cMin === 'a' || cMin === 'e' || cMin === 'i' || cMin === 'o' || cMin === 'u' ||
        cMin === 'á' || cMin === 'é' || cMin === 'í' || cMin === 'ó' || cMin === 'ú'
      );

      if (esVocal) {
        contVocales++;
        vocalesEncontradas.push(c);
      } else if (this.esLetraValida(cMin)) {
        contConsonantes++;
        consonantesEncontradas.push(c);
      }
    }

    this.resultadoVocales = `Número de vocales: ${contVocales}`;
    this.listaVocales = `Vocales: ${vocalesEncontradas.join(', ')}`;
    
    this.resultadoConsonantes = `Número de consonantes: ${contConsonantes}`;
    this.listaConsonantes = `Consonantes: ${consonantesEncontradas.join(', ')}`;

    let soloLetras: string[] = [];
    for (let i = 0; i < longitud; i++) {
      let cMin = this.aMinuscula(caracteres[i]);
      if (this.esLetraValida(cMin)) {
        soloLetras.push(cMin);
      }
    }

    let esPalindromo = true;
    let totalLetras = soloLetras.length;
    for (let i = 0; i < totalLetras / 2; i++) {
      if (soloLetras[i] !== soloLetras[totalLetras - 1 - i]) {
        esPalindromo = false;
        break;
      }
    }

    if (esPalindromo && totalLetras > 0) {
      this.resultadoPalindromo = "La cadena SÍ es un palíndromo.";
    } else {
      this.resultadoPalindromo = "La cadena NO es un palíndromo.";
    }
  }

  aMinuscula(c: string): string {
    if (c === 'A') return 'a';
    if (c === 'E') return 'e';
    if (c === 'I') return 'i';
    if (c === 'O') return 'o';
    if (c === 'U') return 'u';
    if (c === 'Á') return 'á';
    if (c === 'É') return 'é';
    if (c === 'Í') return 'í';
    if (c === 'Ó') return 'ó';
    if (c === 'Ú') return 'ú';
    if (c === 'Ñ') return 'ñ';
    if (c === 'B') return 'b'; if (c === 'C') return 'c'; if (c === 'D') return 'd';
    if (c === 'F') return 'f'; if (c === 'G') return 'g'; if (c === 'H') return 'h';
    if (c === 'J') return 'j'; if (c === 'K') return 'k'; if (c === 'L') return 'l';
    if (c === 'M') return 'm'; if (c === 'N') return 'n'; if (c === 'P') return 'p';
    if (c === 'Q') return 'q'; if (c === 'R') return 'r'; if (c === 'S') return 's';
    if (c === 'T') return 't'; if (c === 'V') return 'v'; if (c === 'W') return 'w';
    if (c === 'X') return 'x'; if (c === 'Y') return 'y'; if (c === 'Z') return 'z';
    return c;
  }

  esLetraValida(c: string): boolean {
    return (
      (c >= 'a' && c <= 'z') ||
      c === 'á' || c === 'é' || c === 'í' || c === 'ó' || c === 'ú' ||
      c === 'ñ'
    );
  }
}