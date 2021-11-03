import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CustomPipe } from './pipes/custom.pipe';
import { ConvertSpacePipe } from './pipes/convert-space.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CustomPipe,
    ConvertSpacePipe
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
