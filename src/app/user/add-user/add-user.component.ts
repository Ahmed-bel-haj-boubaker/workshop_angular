import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Core/Models/user';
import { UserServiceService } from 'src/app/Core/Services/user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  myUser: User = {} as User;

  constructor(private userS:UserServiceService, private R:Router){}

  

  add(F:NgForm){
  console.log(F);
  const uniqueId = new Date().getTime().toString();

  const newUser: User = {
    "id": uniqueId, 
    "firstName": F.value.firstName,
    "lastName": F.value.lastName,
    "birthDate": F.value.birthDate,
    "email": F.value.email,
    "password": F.value.password,
    "profession": F.value.profession,
    "accountCategory": "Customer", 
    "picture": "https://bootdey.com/img/Content/avatar/avatar1.png"
  };
   this.userS.addUser(newUser).subscribe(() => {
    alert('added User!!');
    this.R.navigate(['users']);
  });
  console.log(F);
}
  }

  

  

