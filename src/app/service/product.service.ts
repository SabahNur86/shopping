import {Injectable} from "@angular/core";
import {ProductComponent} from "../component/product/product.component";
import {ProductModel} from "../component/model/product";
import {ToastrService} from "ngx-toastr";
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ListResponseModel} from "../component/model/listResponseModel";
import {ResponseModel} from "../component/model/responseModel";
import {SingleResponseModel} from "../component/model/singleResponse";

@Injectable({
    providedIn: 'root'
  }
)
export class ProductService {


  constructor(
    private toastr: ToastrService,
    private httpClient: HttpClient
  ) {
  }

  getList(): Observable<ListResponseModel<ProductModel>> {
    let api = "https://webapi.angulareducation.com/api/products/getlist"
    return this.httpClient.get<ListResponseModel<ProductModel>>(api)
  }

  add(ProductModel: ProductModel): Observable<ResponseModel> {
    let api = "https://webapi.angulareducation.com/api/products/add";
    let token = localStorage.getItem("token")
    return this.httpClient.post<ResponseModel>(api, ProductModel, {
      headers: new HttpHeaders({"Authorization": "Bearer " + token})
    })
  }


  getById(guid: string): Observable<SingleResponseModel<ProductModel>> {
    let api = "https://webapi.angulareducation.com/api/products/getById?guid="+guid;
    let token = localStorage.getItem("token")
    return this.httpClient.get<SingleResponseModel<ProductModel>>(api, {
      headers: new HttpHeaders({"Authorization": "Bearer " + token})
    })
  }

  update(model: ProductModel): Observable<ResponseModel> {
    let api = "https://webapi.angulareducation.com/api/products/update"
    let token = localStorage.getItem("token")
    return this.httpClient.post<ResponseModel>(api, model, {
      headers: new HttpHeaders({"Authorization": "Bearer " + token})
    });
  }

  delete(model:ProductModel):Observable<ResponseModel>{
    let api = "https://webapi.angulareducation.com/api/products/delete"
    let token = localStorage.getItem("token")
    return this.httpClient.post<ResponseModel>(api, model, {
      headers: new HttpHeaders({"Authorization": "Bearer " + token})
    });
  }


}
