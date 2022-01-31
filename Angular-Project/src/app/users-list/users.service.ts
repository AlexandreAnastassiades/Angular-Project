import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface User{
  firstname: string,
  lastname: string,
  email: string;
  image: string;
  show: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersUrl = 'assets/users.json'
  getUsers(){
    return this.http.get<User[]>(this.usersUrl);
  }
  constructor(private http: HttpClient) { }
}
