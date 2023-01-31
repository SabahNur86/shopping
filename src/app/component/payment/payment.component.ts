import {AfterContentChecked, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BasketService} from "../../service/basket.service";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  //styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit,AfterContentChecked {

  total:number=0;
  @Output() myEvent:EventEmitter<any>= new EventEmitter()
  constructor(
    private basketService:BasketService
  ) { }

  ngOnInit(): void {
  }

  ngAfterContentChecked() {
    this.total=this.basketService.total;
  }

   payment(){
  //   this.basketService.payment(this.total)
  //   document.getElementById("paymentModalCloseBtn").click();
   }

}
