import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CalculoService } from '../../services/calculo.service';

@Component({
  selector: 'app-incrementar-decrementar',
  templateUrl: './incrementar-decrementar.component.html',
  styleUrls: ['./incrementar-decrementar.component.css']
})
export class IncrementarDecrementarComponent implements OnInit {


  //llamo al servicio
  constructor(public CalculoService: CalculoService) { 
  }

  ngOnInit(): void {
    this.CalculoService.contador1 = this.CalculoService.contador1
  }

  incrementar() {
    this.CalculoService.contador1 = this.CalculoService.incrementarMasUno(this.CalculoService.contador1);
  }
  disminuir() {
    this.CalculoService.contador1 = this.CalculoService.disminuirUno(this.CalculoService.contador1);
  }
}
