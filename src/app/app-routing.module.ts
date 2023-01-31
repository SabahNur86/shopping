import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {ProductAddComponent} from "./component/product/product-add/product-add.component";
import {OrdersComponent} from "./component/orders/orders.component";
import {LayoutComponent} from "./component/layout/layout.component";
import {NotFoundComponent} from "./component/not-found/not-found.component";
import {AuthGuard} from "./guards/auth.guard";
import {ProductUpdateComponent} from "./component/product/product-update/product-update.component";
import {LoginComponent} from "./component/login/login.component";

const routes: Routes = [
  {path:'',component:LayoutComponent, children:[
      {path:"", component:HomeComponent},
      {path:"product-add", canActivate:[AuthGuard], component:ProductAddComponent},
      {path:"product-update/:value", canActivate:[AuthGuard], component:ProductUpdateComponent},
      {path:"orders", component:OrdersComponent},
      {path:"login", component:LoginComponent}
    ]},
  {path:'**' , component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
