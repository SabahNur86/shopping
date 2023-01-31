import {Injectable} from "@angular/core";
import {BasketModel} from "../component/model/basket";
import {OrderModel} from "../component/model/order";

@Injectable({
  providedIn:'root'
})
export class OrderService{
  orders:OrderModel[]=[];

  constructor() {
  }
  addOrder(baskets:BasketModel[]){
    let order = new OrderModel()
    order.baskets=baskets;
    order.date= Date();
    this.orders.push(order);
  }
}
