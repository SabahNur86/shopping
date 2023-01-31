import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {HttpClient} from "@angular/common/http";
import {Login} from "../component/model/login";
import {SingleResponseModel} from "../component/model/singleResponse";
import {TokenModel} from "../component/model/token";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth:boolean=false;

  constructor(
    private route :Router,
    private toastr:ToastrService,
    private httpClient:HttpClient,
  ) { }

  isAuthenticate():boolean{
    if(localStorage.getItem("token")){
      return true;
    }else{
      return false;
    }
  }
  login(LoginModel:Login){
    let api="https://webapi.angulareducation.com/api/users/login";
    this.httpClient.post<SingleResponseModel<TokenModel>>(api,LoginModel).subscribe((res)=>{
    localStorage.setItem("token",res.data.token)
    this.route.navigate(['/'])
    },(err)=>{
      if(err.status==400){
        this.toastr.error("Şifre hatalı")
      }
    })
    this.auth=true;

  }
  logout(){
    this.auth=false;
    this.toastr.info('Cikis islemi basarili')
    this.route.navigate(['/'])
    localStorage.removeItem("token")
  }
}
