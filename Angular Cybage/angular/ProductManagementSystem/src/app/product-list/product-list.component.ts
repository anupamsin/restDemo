import { Component, OnInit } from '@angular/core';
import {Product} from "../../product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  product: Product[] = [
    { id: 11, name: 'Prod 1', price:120,image:"https://www.thesprucepets.com/thmb/dpUuT_dNN7QdoSKCYfma1dSD2F8=/3264x2448/filters:fill(auto,1)/FunnyDogSmiling-ef11b73fa1834734b8c47025039fcd43.jpg",description:"test",productFlag:true },
    { id: 12, name: 'Prod 2', price:120,image:"https://www.thesprucepets.com/thmb/dpUuT_dNN7QdoSKCYfma1dSD2F8=/3264x2448/filters:fill(auto,1)/FunnyDogSmiling-ef11b73fa1834734b8c47025039fcd43.jpg",description:"test",productFlag:true },
    { id: 13, name: 'Prod 3', price:120,image:"https://www.thesprucepets.com/thmb/dpUuT_dNN7QdoSKCYfma1dSD2F8=/3264x2448/filters:fill(auto,1)/FunnyDogSmiling-ef11b73fa1834734b8c47025039fcd43.jpg",description:"test",productFlag:true },
    { id: 14, name: 'Prod 4', price:120,image:"https://www.thesprucepets.com/thmb/dpUuT_dNN7QdoSKCYfma1dSD2F8=/3264x2448/filters:fill(auto,1)/FunnyDogSmiling-ef11b73fa1834734b8c47025039fcd43.jpg",description:"test",productFlag:true },
    { id: 15, name: 'Prod 5', price:120,image:"https://www.thesprucepets.com/thmb/dpUuT_dNN7QdoSKCYfma1dSD2F8=/3264x2448/filters:fill(auto,1)/FunnyDogSmiling-ef11b73fa1834734b8c47025039fcd43.jpg",description:"test",productFlag:true },
  ];
}
