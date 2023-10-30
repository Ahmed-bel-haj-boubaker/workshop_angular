import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/user/Model/User.model';

@Injectable({
  providedIn: 'root' // visibilite globale dans tous le projet 
})
export class UserService {
  
URL: string ='http://localhost:3000/User';
  constructor(private http:HttpClient) { }

  getAllusers(){
    return this.http.get(this.URL);
  }

  getUserByID(id:number){}

  AddUser(user:User){}

  updateUser(user:User,id:number){}
}
