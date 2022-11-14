import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewallProductComponent } from './viewall-product/viewall-product.component';
@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ViewallProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
