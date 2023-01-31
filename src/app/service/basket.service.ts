import { Injectable } from '@angular/core';
import {BasketModel} from "../component/model/basket";
import {ToastrService} from "ngx-toastr";
import {OrderService} from "./order.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ListResponseModel} from "../component/model/listResponseModel";
import {ResponseModel} from "../component/model/responseModel";

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  baskets:BasketModel[]=[];
  total:number=0;

  constructor(
    private toastr:ToastrService,
    private orderService:OrderService,
    private httpClient:HttpClient
  ) { }

  getList():Observable<ListResponseModel<BasketModel>>{
    let api="https://webapi.angulareducation.com/api/baskets/getlist";
    return this.httpClient.get<ListResponseModel<BasketModel>>(api);
  }

  add(basketModel:BasketModel):Observable<ResponseModel>{
    let api="https://webapi.angulareducation.com/api/baskets/add"
    return this.httpClient.post<ResponseModel>(api,basketModel);
  }

  deleteBasket(basketModel:BasketModel):Observable<ResponseModel>{
    let api="https://webapi.angulareducation.com/api/baskets/delete"
    return this.httpClient.post<ResponseModel>(api,basketModel);
  }

  updateBasket(basketModel:BasketModel):Observable<ResponseModel>{
    let api="https://webapi.angulareducation.com/api/baskets/update"
    return this.httpClient.post<ResponseModel>(api,basketModel);
  }

  // addBasket(model:any){
  //    let basketModel:BasketModel[]=this.baskets.filter(b=>b.product==model.product)
  //   if(basketModel.length>0) {
  //     model.quantity=basketModel[0].quantity+model.quantity;
  //     this.changeData(basketModel[0],model.quantity)
  //   }else{
  //     this.baskets.push(model);
  //     this.toastr.success("urun basariyla sepete eklendi");
  //     this.hesapla()
  //   }
  //
  // }
  // deleteBasket(basket:BasketModel){
  //   let index=this.baskets.indexOf(basket);
  //   this.baskets.splice(index,1);
  //   this.toastr.info(basket.product.name+" urun basariyla silindi")
  //   this.hesapla()
  // }
  hesapla(){
    this.total=0;
    this.baskets.forEach(element=>{
      this.total=this.total+(element.quantity*element.product.price)
    });

  }

  changeData(basket:BasketModel, quantity:number){
    let index=this.baskets.indexOf(basket);
    this.baskets[index].quantity=quantity;
    // this.baskets.splice(index,1);
    // basket.quantity = quantity;
    // this.baskets.push(basket);
    this.hesapla();
  }

  // payment(total:number){
  //   if(this.total==total){
  //     let count=this.baskets.length;
  //     this.orderService.addOrder(this.baskets)
  //    // this.baskets.splice(0,count);
  //     this.toastr.info("odeme alindi siparisiniz sevk asamasina gecti ")
  //   }
  //   this.hesapla();
  // }
}
