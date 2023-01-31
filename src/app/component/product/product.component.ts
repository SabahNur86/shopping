import {AfterContentChecked, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductModel} from "../model/product";
import {BasketModel} from "../model/basket";
import {ToastrService} from "ngx-toastr";
import {ProductService} from "../../service/product.service";
import {BasketService} from "../../service/basket.service";
import {AuthService} from "../../service/auth.service";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, AfterContentChecked {
  isAuth: Boolean = false;
  products: ProductModel[];
  filterText:string="";

  constructor(
    private toastrService: ToastrService,
    private productService: ProductService,
    private basketService: BasketService,
    private authService: AuthService,

  ) {
  }

  ngOnInit(): void {
    this.getList()
  }

  ngAfterContentChecked() {
    this.isAuth=this.authService.isAuthenticate();
  }


   addBasket(product: ProductModel) {
   let quantity:number=parseInt((<HTMLInputElement>document.getElementById("quantity-" + product.name)).value)
    if(product.inventoryQuantity < quantity){
      this.toastrService.error("stok adedinden fazla miktar girişi yaptınız")
      return;
    }
     let basketModel = new BasketModel();
     basketModel.product = product;
     basketModel.productId=product.id;
     basketModel.quantity = parseInt((<HTMLInputElement>document.getElementById("quantity-" + product.name)).value);
     (<HTMLInputElement>document.getElementById("quantity-" + product.name)).value = "1";
     this.basketService.add(basketModel).subscribe(res=>{
       this.toastrService.success("Basariyla sepete eklendi")
       this.getList();
     })
   }

  getList(){
    this.productService.getList().subscribe((res)=>{
      this.products=res.data;
    },(err)=>{
      if(err.status=="404"){
        this.toastrService.error(err.statusText)
      }else{
        console.log(err)
      }
    })
  }


}
