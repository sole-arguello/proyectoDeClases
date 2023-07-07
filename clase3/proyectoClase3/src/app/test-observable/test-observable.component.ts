import { Component } from '@angular/core';

import { from } from 'rxjs'

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css']
})
export class TestObservableComponent {

  constructor(){}

  ngOnInit(): void {

    
    //observable from que va a emitir de a uno los valores del array
    from([ 1,3,2,78,2,4 ]).subscribe( (data) => {
      console.log(data)
    })
  }

}
