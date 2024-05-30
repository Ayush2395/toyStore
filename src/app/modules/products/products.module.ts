import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { CartComponent } from './pages/cart/cart.component';
import { ProductItemsComponent } from './pages/product-items/product-items.component';


@NgModule({
  declarations: [
    CartComponent,
    ProductItemsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
