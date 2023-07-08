import { Component } from '@angular/core';

@Component({
  selector: 'app-template-var',
  templateUrl: './template-var.component.html',
  styleUrls: ['./template-var.component.css']
})
export class TemplateVarComponent {
  //property binding
  nombre: string = 'Soledad'

  log(value: any){
    console.log(value)
    
  }
}
