import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  //conexion de datos de dos direcciones/ Two way data binding
  username: string = ''
  // updateUsername(event: any){
  //   this.username = event.target.value
  // }
  submit(myForm: any){
    console.log('submit', myForm.value)
  }

}
