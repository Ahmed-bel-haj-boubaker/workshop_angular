import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-main-user',
  templateUrl: './main-user.component.html',
  styleUrls: ['./main-user.component.css']
})
export class MainUserComponent {

constructor(private R:Router){}

  goToUsers(accountCategory:String){
    this.R.navigate(["users/ListUsers",accountCategory]);

  }
}
