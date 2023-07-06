import { Component } from '@angular/core';

export type User = {
  id: number,
  name: string,
  age: number
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[] = [
    {id: 1, name: 'Gaston', age: 35},
    {id: 2, name: 'Fernando', age: 17},
    {id: 3, name: 'Soledad', age: 27}
  ]
}
