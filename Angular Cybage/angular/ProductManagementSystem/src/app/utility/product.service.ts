import { Injectable } from '@angular/core';
import {IProduct} from "../../IProduct";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product: IProduct[] = [
    { id: 11, name: 'Prod 1', price:120,image:"https://th.bing.com/th/id/OIP.IfZcZjpcMqskMNWxz19LWQHaLG?w=120&h=180&c=7&r=0&o=5&pid=1.7",description:"test1",productFlag:true },
    { id: 12, name: 'Prod 2', price:140,image:"https://th.bing.com/th/id/OIP.a9inaujcg4dbHnpiw4LjKAHaDt?w=346&h=174&c=7&r=0&o=5&pid=1.7",description:"test2",productFlag:false },
    { id: 13, name: 'Prod 3', price:150,image:"https://th.bing.com/th/id/OIP.AMS_ffrSC9grsnPFVUGzxAHaEK?w=321&h=180&c=7&r=0&o=5&pid=1.7",description:"test3",productFlag:true },
    { id: 14, name: 'Prod 4', price:110,image:"https://th.bing.com/th/id/OIP.3GOo39yHeqT7s5ULCcHAwAHaE7?w=270&h=180&c=7&r=0&o=5&pid=1.7",description:"test4",productFlag:false },
    { id: 15, name: 'Prod 5', price:190,image:"https://th.bing.com/th?id=OIF.04%2f6TcYJNd5rbYdu2qc%2b7g&w=199&h=199&c=7&r=0&o=5&pid=1.7",description:"test5",productFlag:true },
  ];
  constructor() { }

  getProducts():IProduct[] {
    return this.product;
  }

  getProductById(id: number): any {
    return this.product.find((prod)=>(prod.id == id));
  }

  addProduct(prod: IProduct) {
    this.product.push(prod);
  }
}
