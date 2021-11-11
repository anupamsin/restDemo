import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductListComponent} from "./components/product-list/product-list.component";
import {CustomPipe} from "./pipes/custom.pipe";
import {ConvertSpacePipe} from "./pipes/convert-space.pipe";
import { HeaderComponent } from './components/header/header.component';
import { SearchPipe } from './pipes/search.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './nav/navigation/navigation.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CustomPipe,
    ConvertSpacePipe,
    HeaderComponent,
    SearchPipe,
    FooterComponent,
    NavigationComponent,
    AddProductComponent,
    HomePageComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
