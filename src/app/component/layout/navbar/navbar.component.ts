import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {BasketService} from "../../../service/basket.service";
import {BasketModel} from "../../model/basket";
import {AuthService} from "../../../service/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  //styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterContentChecked {

  baskets:BasketModel[]=[]
  total:number=0;
  auth:boolean;

  constructor(
    private authService:AuthService,
    private basketService:BasketService
  ) { }

  ngOnInit(): void {
    this.baskets=this.basketService.baskets
  }
  ngAfterContentChecked() {
    this.total=this.basketService.total;
    this.auth=this.authService.isAuthenticate();
  }

  logout(){
  this.authService.logout()
  }
}
