import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title1 = 'titulo convertido a upercase';

  title2 = 'TITULO CONVERTIDO A MINUCULA'

  price: number = 30

  date = new Date()

  personas = [
    {
      id: 1,
      nombre: 'Juan',
      employeeType: 'COSTUMER_SUPPORT'
    },
    {
      id: 2,
      nombre: 'Maria',
      employeeType: 'ADMINISTRATOR'
    }
  ]
/*------------------ TODO ESTO SE SUPLANTA POR UN PIPE ASYNC ---------------*/
 //observable // tengo que importar from 'rxjs'
  numbers$ = timer(0, 1000)

  n: number = 0
//para dejar de suscribirme
  sub: Subscription | null = null
//genero el componente //mostrar la info // tengo que importarlo from '@angular/core'
  ngOnInit(): void{
    //guardola refe a la suscripcion
    this.sub = this.numbers$.subscribe(value => 
      //console.log(value)
      this.n = value
      )
  }
//destruyo el componente y me desuscribo para no generar problemas de memoria
  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }


}
