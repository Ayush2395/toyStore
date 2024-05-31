import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/components/navbar/navbar.component';
import { AccountModule } from './modules/account/account.module';
import { HomeComponent } from './common/components/home/home.component';
import { ProductsModule } from './modules/products/products.module';
import { NgIconsModule } from '@ng-icons/core';
import { heroArrowRight, heroMagnifyingGlass, heroMagnifyingGlassCircle, heroShoppingCart } from '@ng-icons/heroicons/outline';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './common/interceptor/auth.interceptor';
import { ProductCardComponent } from './common/components/product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './common/pipes/search.pipe';
import { CheckBoxComponent } from './common/components/check-box/check-box.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductCardComponent,
    SearchPipe,
    CheckBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountModule,
    ProductsModule,
    HttpClientModule,
    FormsModule,
    NgIconsModule.withIcons({ heroShoppingCart, heroMagnifyingGlass, heroArrowRight })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
