import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {UsersService} from "./users.service";

interface User{
  firstname: string,
  lastname: string,
  email: string;
  image: string;
  show: boolean;
}
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  list: Observable<User[]> = this.usersService.getUsers();
  constructor(private usersService: UsersService) { }

}
