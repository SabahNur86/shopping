import {Component} from "@angular/core";
import {BasketModel} from "../model/basket";

@Component({
  selector:'app-home',
  templateUrl:'./home.component.html'
})
export class HomeComponent {
  baskets:BasketModel[]=[];

 getBasket(event:any){
  this.baskets=event.data;
}
}
