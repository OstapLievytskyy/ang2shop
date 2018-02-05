import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CartComponent, ProductListComponent, ProductComponent } from './components';
import { ProductService, CartService, ConstantsService } from './services';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductService, CartService, ConstantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
