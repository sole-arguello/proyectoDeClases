import { Injectable } from '@angular/core';
import { User } from '../user-list/user-list.component';

// @Injectable({
//   //se puede usar a nivel raiz seria como un context de react
//   providedIn: 'root'//llevo a module.ts de app e importo en providers el servicio
// })

@Injectable()
export class UserService {
  //atributos y metodos
  //constructor(private ejemploService: EjemploService) { }

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
