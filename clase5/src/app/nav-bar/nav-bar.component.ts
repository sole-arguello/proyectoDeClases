import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  productCount: number = 0
  cartPrice: number = 0
  //inyecto
  constructor(private cartService: CartService){}

  ngOnInit(): void {
    // //cantidad de productos
    // this.cartService.cart.products.length

    // this.cartPrice = this.cartService.cart.price

    this.cartService.cartSubject.subscribe(cart => { 
      this.productCount = cart.products.length
      this.cartPrice = cart.price
    })
  }
}
