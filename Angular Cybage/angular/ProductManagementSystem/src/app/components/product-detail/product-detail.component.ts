import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ProductService } from 'src/app/utility/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: any;
  id: any;
  constructor(private _activeRoute:ActivatedRoute,private productService:ProductService) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(p=>{
      this.id=p.id;
    });
    this.product=this.productService.getProductById(this.id);
  }

}
