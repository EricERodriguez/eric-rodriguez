import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-multiplicar-dividir',
  templateUrl: './multiplicar-dividir.component.html',
  styleUrls: ['./multiplicar-dividir.component.css']
})
export class MultiplicarDividirComponent implements OnInit {
  @Input()
  contador: number;

  constructor() {
    this.contador = 0;
  }

  ngOnInit(): void {

  }
  @Output() dividirr = new EventEmitter<number>();
 
  dividir() {
    this.dividirr.emit( this.contador = this.contador / 2)
  }
  @Output() multiplicarr = new EventEmitter<number>();
 
  multiplicar() {
    this.multiplicarr.emit(this.contador = this.contador * 2)
  }

}
