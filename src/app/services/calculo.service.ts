import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculoService {

  // defino
  public contador1 = 0;
  private sumaOresta = 1;
  private dividoOmultiplico = 2;

  constructor() { }


  incrementarMasUno = ( contador1: number): number => contador1 + this.sumaOresta;

  disminuirUno = ( contador1: number): number => contador1 - this.sumaOresta;


  multiplicar = ( contador1: number): number => contador1 * this.dividoOmultiplico;

  dividir = ( contador1: number): number => contador1 / this.dividoOmultiplico;


  reset = ( contador1: number): number => contador1 = 0;
}
