import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { ProductItemsComponent } from './pages/product-items/product-items.component';

const routes: Routes = [
  { path: "cart", component: CartComponent, title: "My Cart" },
  { path: "product-items", component: ProductItemsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
