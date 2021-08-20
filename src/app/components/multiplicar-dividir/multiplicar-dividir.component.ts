import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CalculoService } from '../../services/calculo.service';


@Component({
  selector: 'app-multiplicar-dividir',
  templateUrl: './multiplicar-dividir.component.html',
  styleUrls: ['./multiplicar-dividir.component.css']
})
export class MultiplicarDividirComponent implements OnInit {


  constructor(public CalculoService: CalculoService) {

  }

  ngOnInit(): void {

  }



  multiplicarserv() {
    this.CalculoService.contador1 = this.CalculoService.multiplicar(this.CalculoService.contador1);
  }

  dividirserv() {
    this.CalculoService.contador1 = this.CalculoService.dividir(this.CalculoService.contador1);
  }
}
