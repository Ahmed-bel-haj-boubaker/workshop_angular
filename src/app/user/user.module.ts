import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListUserComponent } from './list-user/list-user.component';
import { MainUserComponent } from './main-user/main-user.component';
import { AccountComponent } from './account/account.component';
import { SliderComponent } from './slider/slider.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserComponentComponent } from './user-component/user-component.component';


@NgModule({
  declarations: [
    ListUserComponent,
    MainUserComponent,
    AccountComponent,
    SliderComponent,
    UserDetailsComponent,
    UserComponentComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    
  ]
})
export class UserModule { }
