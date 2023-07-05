import { Component } from '@angular/core';

//DECORATOR
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//CLASS JS
export class AppComponent {
  title = 'proyectoDeClases';
//------------clase 1
  valorInicial: number = 4

  clickerWasCliked(){
    console.log('Cliker was Cliked')
  }

  paises = ['Argentina', 'Francia', 'Chile', 'Peru']

  deleteCountry(paisABorrar: String){
    this.paises = this.paises.filter(pais => pais !== paisABorrar)
  }

  /*------------clase 2  */

  
}
