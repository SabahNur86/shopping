import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../service/product.service";
import {ProductModel} from "../../model/product";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {

  img:string="";
  updateForm:FormGroup
  products:ProductModel;
  constructor(
    private formBuilder:FormBuilder,
    private activateRoute:ActivatedRoute,
    private productService:ProductService,
    private router:Router,
    private toastr:ToastrService
  ) { }


  createUpdateForm(){
    this.updateForm=this.formBuilder.group({
      'id':[0,[Validators.required]],
      'name':[null,[Validators.required,Validators.minLength(3)]],
      'inventoryQuantity':[0,[Validators.required,Validators.min(1)]],
      'price':[null,[Validators.required,Validators.min(3)]],
      'imageUrl':[null,[Validators.minLength(5)]],
      'codeGuid':[""],
    })
  }
  ngOnInit(): void {
    this.createUpdateForm()
    this.getById()
  }
  getById(){
    let guid:string="";
    this.activateRoute.params.subscribe((params)=> {
      guid = params["value"];
    })
      this.productService.getById(guid).subscribe((res)=>{
        this.products=res.data;
        this.updateForm.controls['id'].setValue(res.data.id)
        this.updateForm.controls['name'].setValue(res.data.name)
        this.updateForm.controls['inventoryQuantity'].setValue(res.data.inventoryQuantity)
        this.updateForm.controls['price'].setValue(res.data.price)
        this.updateForm.controls['imageUrl'].setValue(res.data.imageUrl)
        this.updateForm.controls['codeGuid'].setValue(res.data.codeGuid)
      },(err)=>{
        console.log(err)
      })
  }

  update(){
    if(this.updateForm.valid){
    let model:ProductModel=this.updateForm.value;
    this.productService.update(model).subscribe((res)=>{
      this.router.navigate(['/'])
      this.toastr.success(res.message)
    },(err)=>{
      this.toastr.error(err.statusText)
    })
    }else{
      this.toastr.error("Valid hatasi")
    }
  }

  delete(){
    this.productService.delete(this.updateForm.value).subscribe((res)=>{
      this.toastr.warning(res.message)
      this.router.navigate(['/'])
     },(err)=> {
      console.log(err)
  });
  }
  }
