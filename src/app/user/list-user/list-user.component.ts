import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { User } from '../Model/User.model'
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users: User[] = [];

  constructor(private route: ActivatedRoute , private userS : UserService) { }

  ngOnInit(): void {
 





    const accountCategory = this.route.snapshot.paramMap.get('accountCategory');

    // Filtrez les utilisateurs en fonction de la catégorie de compte
    if (accountCategory) {
      this.users = this.users.filter(user => user.accountCategory === accountCategory);
    }  }
}
