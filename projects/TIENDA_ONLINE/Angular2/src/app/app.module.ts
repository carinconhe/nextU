import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { HttpService } from './http.service';
import { StoreComponent } from './store/store.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { StoresRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    StoreComponent,
    NavTopComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    StoresRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
