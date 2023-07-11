import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
}
