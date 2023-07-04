import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.css']
})
export class ClickerComponent {
  //Property Binding
  @Input('pepe')//numero alias de number
  number: number = 0

  @Output()
  clickEmitter = new EventEmitter ()
  //Event Binding
  increamentar(){
    this.number++
    this.clickEmitter.emit()
  }
  decreamentar(){
    this.number--
  }
  reset(){
    this.number = 0
  }

  //Directivas 
}
