import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { CartComponent } from './pages/cart/cart.component';
import { ProductItemsComponent } from './pages/product-items/product-items.component';
import { NgIconsModule } from '@ng-icons/core';
import { heroPlus, heroShoppingCart } from '@ng-icons/heroicons/outline';


@NgModule({
  declarations: [
    CartComponent,
    ProductItemsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgIconsModule.withIcons({ heroShoppingCart ,heroPlus})
  ]
})
export class ProductsModule { }
