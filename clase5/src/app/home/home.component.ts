import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, from } from 'rxjs';
import { CartService } from '../service/cart.service';

export type Product = {
  id: number
  name: string
  price: number
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // //Subject: es observable y observador

  // //numbers$ = from([1, 2, 3, 4])// operador
  // numbers$ = new Subject<number>()

  // ngOnInit(): void {
  //   //viene sin valor 
  //   this.numbers$.subscribe(value => console.log('Suscriptor 1:', value))
  //   this.numbers$.subscribe(value => console.log('Suscriptor 2:', value))
  // }
  // emit(){
  //       // le doy un valor a demanda
  //       this.numbers$.next(1)
  // }

  products: Product[] = [

    {
      id: 1,
      name: 'Tele 200" ',
      price: 9999
    },
    {
      id: 2,
      name: 'Phone xl',
      price: 5663,
    }
  ]
  //BehaviorSubject
  numbers$ = new Subject()
  //inicializo
  numbers2$ = new BehaviorSubject(10)

  //inyecto
  constructor(private cartService: CartService){}

  //BehaviorSubject
  ngOnInit(): void {
    // //Subject
    // this.numbers$.next(1)
    // this.numbers$.subscribe(value => {
    //   console.log(value)
    // })
    // this.numbers$.next(2)

    //nuevo valor
    this.numbers2$.next(20)
    this.numbers2$.subscribe(value => {
      console.log(value)
    })
    this.numbers2$.next(30)
    this.numbers2$.next(40)
    //this.numbers2$.getValue()
  }

  addToCart(product: Product){
    //console.log(product)
    this.cartService.addToCart(product)
  }

}
