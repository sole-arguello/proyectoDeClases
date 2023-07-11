import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  //inyeccion de dependencia/ Form builder
  constructor(private fb: FormBuilder){}

  signUpForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['',
    Validators.required,
    Validators.minLength(12),
    Validators.minLength(6), 
  ]
  })

  //formulario Reactivos
  myForm = new FormGroup({
    fullName: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(12),
      Validators.minLength(6), 
    ])
  })

  get fullName(){
    return this.myForm.get('fullName')
  }

  get email(){
    return this.myForm.get('email')
  }

  get password(){
    return this.myForm.get('password')
  }
}
