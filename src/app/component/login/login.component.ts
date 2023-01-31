import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {Login} from "../model/login";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 loginForm:UntypedFormGroup;
  constructor(
    private formBuilder:UntypedFormBuilder,
    private authService:AuthService,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
    this.createLoginForm()
  }
  createLoginForm(){
    this.loginForm= this.formBuilder.group({
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required,Validators.min(2)]],
    })
  }
  login(){
    if(this.loginForm.valid) {
      let loginModel: Login = this.loginForm.value;
      this.authService.login(loginModel)
      this.toastr.success("Giriş başarılı")
    }else{
      this.toastr.error("Valid hatası")
    }
  }
}
