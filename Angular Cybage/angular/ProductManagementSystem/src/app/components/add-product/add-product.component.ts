import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import { ProductService } from 'src/app/utility/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productForm=new FormGroup({
    id:new FormControl('',[Validators.required]),
    name:new FormControl('',[Validators.required]),
    price:new FormControl('',[Validators.required]),
    image:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    productFlag:new FormControl('',[Validators.required])
  });

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.productForm.valid) {
      console.log(this.productForm.value);
      alert("Product Form Validation and Addition is Success");
      this.productService.addProduct(this.productForm.value);
    }else{
      alert("Product Form Validation Failed!! Please Enter All Values")
    }
  }

}
