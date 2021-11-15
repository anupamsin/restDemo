import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from "./components/product-list/product-list.component";
import {AddProductComponent} from "./components/add-product/add-product.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";
import {EmployeeListComponent} from "./components/employee-list/employee-list.component";
import {AddEmployeeComponent} from "./components/add-employee/add-employee.component";

const routes: Routes = [{path: 'productList', component: ProductListComponent},
  {path: 'addProduct', component: AddProductComponent},
  {path: 'homePage', component: HomePageComponent},
  {path: 'employeeList', component: EmployeeListComponent},
  {path: 'addEmployee', component: AddEmployeeComponent},
  {path: 'product/:id', component: ProductDetailComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
