import { Component } from '@angular/core';
import { User } from '../user-list/user-list.component';

@Component({
  selector: 'app-user-detail-list',
  templateUrl: './user-detail-list.component.html',
  styleUrls: ['./user-detail-list.component.css']
})
export class UserDetailListComponent {
  users: User[] = [
    {id: 1, name: 'Gaston', age: 35},
    {id: 2, name: 'Fernando', age: 17},
    {id: 3, name: 'Soledad', age: 27},
    {id: 4, name: 'Flor', age: 27}
  ]
}
