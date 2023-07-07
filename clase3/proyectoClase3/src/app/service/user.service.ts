import { Injectable } from '@angular/core';
import { User } from '../user-list/user-list.component';

import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  //se puede usar a nivel raiz seria como un context de react
  providedIn: 'root'//llevo a module.ts de app e importo en providers el servicio
})

// @Injectable()
export class UserService {
  //atributos y metodos
  //constructor(private ejemploService: EjemploService) { }

  constructor(private http: HttpClient){
    
    //RxJs Reactive extension for Javascript
    const countries$ = this.http.get('https://jsonplaceholder.typicode.com/todos/1')
    countries$.subscribe({
      //objeto de configuracion
      next: (data: any) => { console.log(data) },
      error: (error) => { console.warn(error) },
      complete: () => { console.log('Complete') }
    })
    //observable
    
  }

  users: User[] = [
    {id: 1, name: 'Gaston', age: 35},
    {id: 2, name: 'Fernando', age: 17},
    {id: 3, name: 'Soledad', age: 27}
  ]
  //loistica
  addUser(newUser: User){
    if(!this.users.find(user => user.name === newUser.name)){
      this.users.push(newUser)
    }
    
  }
}
