import {AfterContentChecked, Component, OnInit} from "@angular/core";
import {BasketModel} from "../model/basket";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../../service/auth.service";

@Component({
  selector:'app-home',
  templateUrl:'./home.component.html'
})
export class HomeComponent implements OnInit,AfterContentChecked{
  isAuth:Boolean=false
  constructor(
    private authService:AuthService
  ) { }

  ngOnInit() {
    this.isAuth = this.authService.isAuthenticate();
}
ngAfterContentChecked() {
  this.isAuth = this.authService.isAuthenticate();
}
}
