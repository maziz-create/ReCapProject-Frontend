import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPageComponent } from './components/pages/account-page/account-page.component';
import { CarDetailPageComponent } from './components/pages/car-detail-page/car-detail-page.component';
import { CarsPageComponent } from './components/pages/cars-page/cars-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { LogoutPageComponent } from './components/pages/logout-page/logout-page.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { WalletPageComponent } from './components/pages/wallet-page/wallet-page.component';

const routes: Routes = [
  {
    path: '', pathMatch: "full",
    component: HomepageComponent
  },
  {
    path: 'brand/:brandName',
    component: HomepageComponent
  },
  {
    path: 'cars',
    component: CarsPageComponent
  },
  {
    path: 'car/:carId',
    component: CarDetailPageComponent
  },
  {
    path: 'checkout',
    component: CheckoutPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'signup',
    component: RegisterPageComponent
  },
  {
    path: 'logout',
    component: LogoutPageComponent
  },
  {
    path: 'wallet',
    component: WalletPageComponent
  },
  {
    path: 'account',
    component: AccountPageComponent,
  },
  {
    path: '404',
    component: NotFoundPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
