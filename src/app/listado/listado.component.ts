import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  //paises: string [] = ['Argentina', 'Francia', 'Chile', 'Peru']
  @Input()
  paises: String[] = []

  @Output()
  borrarPais = new EventEmitter()

  removePais(paisABorrar:String){
    this.borrarPais.emit(paisABorrar)
    //this.paises = this.paises.filter(pais => pais !== paisABorrar)
  }
}
