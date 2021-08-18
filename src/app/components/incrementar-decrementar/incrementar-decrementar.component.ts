import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementar-decrementar',
  templateUrl: './incrementar-decrementar.component.html',
  styleUrls: ['./incrementar-decrementar.component.css']
})
export class IncrementarDecrementarComponent implements OnInit {



   constructor() { }

  ngOnInit(): void {
  }
  //defino el contador
  contador:number  = 0;

  incrementar(){
    return this.contador = this.contador + 1
  }
  decrementar(){
    return this.contador = this.contador - 1
  }


  receiveMessage($event:any) {
    this.contador = $event
  }
}
