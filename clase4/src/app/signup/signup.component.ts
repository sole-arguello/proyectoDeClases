import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  //formulario Reactivos
  myForm = new FormGroup({
    fullName: new FormControl('Sole'),
    email: new FormControl('sole@gmail.com'),
    password: new FormControl('123456')
  })
}
