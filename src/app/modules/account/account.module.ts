import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AccountRoutingModule } from './account-routing.module';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AccountComponent } from './pages/account/account.component';
import { NgIconsModule } from '@ng-icons/core';
import { heroAtSymbol, heroEye, heroEyeSlash } from '@ng-icons/heroicons/outline';


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule, ReactiveFormsModule,
    NgIconsModule.withIcons({ heroAtSymbol, heroEye, heroEyeSlash })
  ]
})
export class AccountModule { }
