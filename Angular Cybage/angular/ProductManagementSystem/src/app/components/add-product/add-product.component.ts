import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm} from "@angular/forms";
import {IProduct} from "../../../IProduct";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productForm=new FormGroup({
        id:new FormControl(),
        pName:new FormControl(),
        pPrice:new FormControl(),
        pImage:new FormControl(),
        pDescription:new FormControl(),
        pFlag:new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }

  test(productForm: FormGroup) {
    console.log(productForm);
  }
}
