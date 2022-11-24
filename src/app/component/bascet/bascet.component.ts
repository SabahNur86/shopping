import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BasketModel} from "../model/basket";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-bascet',
  templateUrl: './bascet.component.html',
  //styleUrls: ['./bascet.component.scss']
})
export class BascetComponent implements OnInit {
@Output() myEvent:EventEmitter<any>=new EventEmitter()
@Input() baskets:BasketModel[]=[];
         total:number=0;


  constructor(
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
  }

  deleteBasket(basket:BasketModel){
    let index=this.baskets.indexOf(basket);
    this.baskets.splice(index,1);
    this.toastrService.info(basket.product.name+" urun basariyla silindi")
  }
   hesapla(){
    this.total=0;
    this.baskets.forEach(element=>{
      this.total=this.total+(element.quantity*element.product.price)
      });
    return this.total;

   }

   changeData(basket:BasketModel){
    let index=this.baskets.indexOf(basket);
    this.baskets.splice(index,1);
    let quantity = parseInt((<HTMLInputElement>document.getElementById("basketQuantity-"+basket.product.name)).value);
    basket.quantity = quantity;
    this.baskets.push(basket);
   }

   payment(event:any){
    if(this.total==event.total){
      let count=this.baskets.length;
      this.baskets.splice(0,count);
      this.toastrService.info("odeme alindi siparisiniz sevk asamasina gecti ")
    }
   }
}
