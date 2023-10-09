import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { MainProductComponent } from './main-product/main-product.component';
import { MainProviderComponent } from './main-provider/main-provider.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},

  {path:"home",component:HomeComponent},

  { path:"users", loadChildren: ()=>import('./user/user.module').then(m => m.UserModule),
},
  {path:"products", loadChildren: ()=>import('./product/product.module').then(m => m.ProductModule)},
  {path:"providers",loadChildren: ()=>import('./provider/provider.module').then(m => m.ProviderModule)},
  { path:"**",component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


