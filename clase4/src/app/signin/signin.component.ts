import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  // email: string = ''
  // password: string = ''

  submit(myForm: any){
    console.log('submit', myForm)
    // console.log('submit', {
    //   email: this.email,
    //   password: this.password
    // })
  }

}
