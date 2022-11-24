import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductModel} from "../model/product";
import {BasketModel} from "../model/basket";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: ProductModel[] = [
    {
      name: "Kursun Kalem",
      price: 25,
      imageUrl: "https://m.media-amazon.com/images/I/61ItnQ7-g7L.jpg"},
    {
      name: "Uclu Kalem",
      price: 30,
      imageUrl: "https://www.kirtasiyedunyasi.com/faber-castell-versatil-kalem-grip-ii-1345-05-mm-gumus-05-uclu-kalem-faber-castell-22890-25-O.jpg"
    },
    {
      name: "Keceli Kalem",
      price: 35,
      imageUrl: "https://ozturkticaret.com.tr/uploads/p/p/Faber-Castell-38-Kalem-Tipi-6li-Fosforlu-Kalem-Seti_1.jpg"
    },
    {
      name: "Highligther",
      price: 45,
      imageUrl: "https://www.kagito.com/wp-content/uploads/2021/02/highliter-kalem-anagorsel-fosforlu.jpg"
    },
    {
      name: "Kursun Kalemx",
      price: 25,
      imageUrl: "https://m.media-amazon.com/images/I/61ItnQ7-g7L.jpg"},
    {
      name: "Uclu Kalemx",
      price: 30,
      imageUrl: "https://www.kirtasiyedunyasi.com/faber-castell-versatil-kalem-grip-ii-1345-05-mm-gumus-05-uclu-kalem-faber-castell-22890-25-O.jpg"
    },
    {
      name: "Keceli Kalemx",
      price: 35,
      imageUrl: "https://ozturkticaret.com.tr/uploads/p/p/Faber-Castell-38-Kalem-Tipi-6li-Fosforlu-Kalem-Seti_1.jpg"
    },
    {
      name: "Highligtherx",
      price: 45,
      imageUrl: "https://www.kagito.com/wp-content/uploads/2021/02/highliter-kalem-anagorsel-fosforlu.jpg"
    }
  ];
  baskets:BasketModel[]=[];
  @Output() myEvent:EventEmitter<any>= new EventEmitter();

  addBasket(product:ProductModel){
    let basketModel=new BasketModel();
    basketModel.product=product;
    basketModel.quantity= parseInt((<HTMLInputElement>document.getElementById("quantity-"+product.name)).value);
    (<HTMLInputElement>document.getElementById("quantity-"+product.name)).value="1";
    this.baskets.push(basketModel);
    this.myEvent.emit({data: this.baskets});
    this.toastrService.success(product.name+" basariyla eklendi")

  }
  constructor(
    private toastrService:ToastrService
  ) {
  }

  ngOnInit(): void {
  }

}
