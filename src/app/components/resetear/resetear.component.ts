import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CalculoService } from '../../services/calculo.service';

@Component({
  selector: 'app-resetear',
  templateUrl: './resetear.component.html',
  styleUrls: ['./resetear.component.css']
})
export class ResetearComponent implements OnInit {



  constructor(public CalculoService: CalculoService) {
   }

  ngOnInit(): void {
  }

  resetserv() {
    this.CalculoService.contador1 = this.CalculoService.reset(this.CalculoService.contador1);
  }


}
