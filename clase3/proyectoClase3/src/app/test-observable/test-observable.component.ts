import { Component } from '@angular/core';

import { Subscription,from, timer } from 'rxjs'

import { filter, map } from 'rxjs/operators'
@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css']
})
export class TestObservableComponent {

  subscription: Subscription | null = null

  constructor(){}

  ngOnInit(): void {
    //observable from que va a emitir de a uno los valores del array
    // from([ 1,3,2,78,2,4 ]).subscribe( (data) => {
    //   console.log(data)
    // })

    //genera un observable infinito emitiendo un numero secuencial
    this.subscription = timer(0, 1000).pipe(
      filter((data) => { return data %2 === 0 }),
      map((data: number) => data * 2),
      ).subscribe( (data) => {
      console.log(data)
    })
  }

  ngOnDestroy(): void{
    if (this.subscription){
      this.subscription.unsubscribe()
    }
  }

}
