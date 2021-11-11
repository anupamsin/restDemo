import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from "./components/product-list/product-list.component";
import {AddProductComponent} from "./components/add-product/add-product.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";

const routes: Routes = [{path: 'productList', component: ProductListComponent},
  {path: 'addProduct', component: AddProductComponent},
  {path: 'homePage', component: HomePageComponent},
  {path: 'product/:id', component: ProductDetailComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
