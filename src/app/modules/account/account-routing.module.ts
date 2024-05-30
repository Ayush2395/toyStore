import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AccountComponent } from './pages/account/account.component';

const routes: Routes = [
  { path: "signin", component: SigninComponent, title: "SignIn" },
  { path: "signup", component: SignupComponent, title: "SignUp" },
  { path: "profile", component: AccountComponent, title: "Account" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
