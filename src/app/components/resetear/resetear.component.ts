import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-resetear',
  templateUrl: './resetear.component.html',
  styleUrls: ['./resetear.component.css']
})
export class ResetearComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<number>();
 
  sendMessage() {
    this.messageEvent.emit(this.contador = 0)
  }

  @Input()
  contador: number;


  constructor() {
    this.contador = 0
   }

  ngOnInit(): void {
  }


}
