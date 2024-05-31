import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './common/components/home/home.component';
import { NotFoundComponent } from './common/components/not-found/not-found.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent, title: "Home" },
  { path: "account", loadChildren: () => import("./modules/account/account.module").then(m => m.AccountModule), title: "Account" },
  { path: "products", loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule), title: "Products" },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
