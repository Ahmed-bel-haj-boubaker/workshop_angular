import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable(
{
  providedIn: 'root'
}
)
export class UserServiceService {


usersList: User[]= [];

//URL du Backend
url = "http://localhost:3000/users";

httpOption={
  headers: new HttpHeaders({
    'content-type' : 'application/json'
  })
};

  constructor( private http: HttpClient ) { }
  

  getAllUsers(){
   return this.http.get<User[]>(this.url);
  }

  addUser(u:User){
    return this.http.post<User>(this.url, u, this.httpOption);
  }

}



