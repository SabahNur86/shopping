import {AfterContentChecked, Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {ProductService} from "../../../service/product.service";
import {ProductModel} from "../../model/product";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../service/auth.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector:'app-product-add',
  templateUrl:'./product-add.component.html'
})
export class ProductAddComponent implements OnInit{

  img:string="";
  addForm:FormGroup

  constructor(
    private productService:ProductService,
    private formBuilder:FormBuilder,
    private authSevice:AuthService,
    private toastr:ToastrService,
    private router:Router
  ) {}

  createAddForm(){
  this.addForm=this.formBuilder.group({
    'name':[null,[Validators.required,Validators.minLength(3)]],
    'inventoryQuantity':[null,[Validators.required,Validators.min(1)]],
    'price':[null,[Validators.required,Validators.min(3)]],
    'imageUrl':[null,[Validators.required,Validators.minLength(5)]],
    'codeGuid':['']
  })
  }

  ngOnInit() {
  this.createAddForm()
  }


  add(){
   if(this.addForm.valid) {
     let model:ProductModel=this.addForm.value;
     this.productService.add(model).subscribe((res)=>{
       this.router.navigate(['/'])
       this.toastr.success(res.message)
       },(err)=>{
       this.toastr.error(err.message)
     })

   }else{
     this.toastr.error("Valid hatası, uygun veriler giriniz")
   }
 }

 canDeactivate(){
   return confirm('Sayfadan islem yapmadan cikiyorsunuz')
 }
}
