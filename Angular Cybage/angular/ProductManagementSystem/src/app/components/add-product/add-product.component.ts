import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {IProduct} from "../../../IProduct";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productForm=new FormGroup({
        id:new FormControl('',[Validators.required]),
        pName:new FormControl('',[Validators.required]),
        pPrice:new FormControl('',[Validators.required]),
        pImage:new FormControl('',[Validators.required]),
        pDescription:new FormControl('',[Validators.required]),
        pFlag:new FormControl('',[Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(productForm: FormGroup) {
    console.log(productForm);
  }
}
