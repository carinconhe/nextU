import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormLoginComponent } from './form-login/form-login.component';
import { StoreComponent } from './store/store.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: '', component: FormLoginComponent },
  { path: 'catalogo', component: StoreComponent },
  { path: 'carrito', component: ShoppingCartComponent },
  { path: 'catalogo/producto/:name', component: ProductDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class StoresRoutingModule { }
