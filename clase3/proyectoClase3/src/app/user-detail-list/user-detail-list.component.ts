import { Component } from '@angular/core';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-user-detail-list',
  templateUrl: './user-detail-list.component.html',
  styleUrls: ['./user-detail-list.component.css']
})
export class UserDetailListComponent {

  //declaro public 'es un modificador de visibilidad', el nombre de variable userService y el tipo UserService
  constructor(public userService: UserService){

  }
}
