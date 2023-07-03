import { Component } from '@angular/core';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.css']
})
export class ClickerComponent {
  //Property Binding
  numero: number = 0
  //Event Binding
  increamentar(){
    this.numero++
  }
  decreamentar(){
    this.numero--
  }
  reset(){
    this.numero = 0
  }

  //Directivas 
}
