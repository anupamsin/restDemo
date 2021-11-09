import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductListComponent} from "./components/product-list/product-list.component";
import {CustomPipe} from "./pipes/custom.pipe";
import {ConvertSpacePipe} from "./pipes/convert-space.pipe";
import { HeaderComponent } from './components/header/header.component';
import { SearchPipe } from './pipes/search.pipe';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CustomPipe,
    ConvertSpacePipe,
    HeaderComponent,
    SearchPipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
