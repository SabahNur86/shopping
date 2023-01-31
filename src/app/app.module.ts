import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from "./component/home/home.component";
import {NavbarComponent} from './component/layout/navbar/navbar.component';
import {ProductComponent} from './component/product/product.component';
import {BasketComponent} from './component/bascet/basket.component';
import {PaymentComponent} from './component/payment/payment.component';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ProductAddComponent} from "./component/product/product-add/product-add.component";
import {OrdersComponent} from './component/orders/orders.component';
import {LayoutComponent} from './component/layout/layout.component';
import {NotFoundComponent} from './component/not-found/not-found.component';
import {FooterComponent} from './component/layout/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductUpdateComponent} from './component/product/product-update/product-update.component';
import {FilterProductPipe} from './pipe/filter-product.pipe';
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './component/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProductComponent,
    BasketComponent,
    PaymentComponent,
    ProductAddComponent,
    OrdersComponent,
    LayoutComponent,
    NotFoundComponent,
    FooterComponent,
    ProductUpdateComponent,
    FilterProductPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    ToastrModule.forRoot(
      {
        closeButton: true,
        progressBar: true,
        positionClass: "toast-bottom-right",
      }
    ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
