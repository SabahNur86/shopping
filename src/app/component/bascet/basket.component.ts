import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {BasketModel} from "../model/basket";
import {ToastrService} from "ngx-toastr";
import {BasketService} from "../../service/basket.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  //styleUrls: ['./bascet.component.scss']
})
export class BasketComponent implements OnInit,AfterContentChecked {

 baskets:BasketModel[]=[];
         total:number=0;


  constructor(
    private toastrService:ToastrService,
    private basketService:BasketService
  ) { }

  ngOnInit(): void {
    this.getList();
   // this.baskets=this.basketService.baskets;

  }

  ngAfterContentChecked() {
    //this.total=this.basketService.total;
  }

  getList(){
    this.basketService.getList().subscribe(res=>{
    this.baskets=res.data;

    })
  }

   deleteBasket(basket:BasketModel){
    confirm("Silmek istediğinizden emin misiniz?")
   this.basketService.deleteBasket(basket).subscribe(res=>{
     this.toastrService.info("Urun basariyla silindi")
     this.getList();
   },(err)=>{
     this.toastrService.error(err.message)
   });
   }

  updateBasket(basket:BasketModel, quantity:any){
    if(basket.product.inventoryQuantity+basket.quantity-quantity.value < 0){
      this.toastrService.error("stok adedinden fazla miktar girişi yaptınız")
      return;
    }
    basket.quantity=quantity.value;
    this.basketService.updateBasket(basket).subscribe(res=>{
      this.getList();
    },(err)=>{
      this.toastrService.error(err.message)
    });
  }


    // changeData(basket:BasketModel, quantity:any){
    // this.basketService.changeData(basket,quantity.value)
    // }


}
