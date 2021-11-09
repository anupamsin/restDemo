import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import {ThirdComponent} from './third/third.component';
import {FourthComponent} from './fourth/fourth.component';
import {FormsModule} from "@angular/forms";
import {ParentComponent} from './parent/parent.component';
import {ChildoneComponent} from './childone/childone.component';
import {ChildtwoComponent} from './childtwo/childtwo.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    ParentComponent,
    ChildoneComponent,
    ChildtwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ParentComponent]
  //bootstrap: [AppComponent]
})
export class AppModule {
}
