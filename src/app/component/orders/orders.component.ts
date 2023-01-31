import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {OrderService} from "../../service/order.service";
import {OrderModel} from "../model/order";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit,AfterContentChecked {

  orders:OrderModel[]=[];
  constructor(
    private orderService:OrderService
  ) {}

  ngOnInit(): void {
  }
  ngAfterContentChecked() {
    this.orders=this.orderService.orders;
  }
}
