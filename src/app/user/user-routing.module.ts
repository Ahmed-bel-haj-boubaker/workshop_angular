import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainUserComponent } from './main-user/main-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {path:"",component:MainUserComponent},
  {path:"user-detail/:id",component:UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
