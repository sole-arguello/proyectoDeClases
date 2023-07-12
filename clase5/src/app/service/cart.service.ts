import { Injectable } from '@angular/core';
import { Product } from '../home/home.component';
import { Subject } from 'rxjs';

type Cart = {
  products: Product[],
  price: number,
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart = {
    products: [],
    price: 0
  }
//Tomo el estado actual y los cambios hacia el subject del carrito osea la ultima info
  cartSubject = new Subject<Cart>()

  constructor() { }

  addToCart(product: Product){
    this.cart.products.push(product)
    this.cart.price += product.price

    console.log('Producto agregado: ' , this.cart)
    this.cartSubject.next(this.cart)
  }
}
