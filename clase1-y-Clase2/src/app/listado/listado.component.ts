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


  // Ciclos de vida 
  /*Al construirse inicia el array vacio luego de construido se ejecutan 
  los Input y Output y recien ahi se le asigna valor si es que lo tiene a
  la variable osea se inicializa */
  constructor(){
    console.log('Constructor del listado', this.paises.length)
  }

  ngOnInit(): void {
    console.log('ngOnInit del listado', this.paises.length)
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit del listado', this.paises.length)
  }

  ngOnDestroy(){
    console.log('ngOnDestroy del listado', this.paises.length)
  }

  removePais(paisABorrar:String){
    this.borrarPais.emit(paisABorrar)
    //this.paises = this.paises.filter(pais => pais !== paisABorrar)
  }
}
