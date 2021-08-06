import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/guards/admin.guard';
import { LoginGuard } from 'src/app/guards/login.guard';
import { AccountPageComponent } from './components/pages/account-page/account-page.component';
import { AdminDashboardPageComponent } from './components/pages/admin-dashboard-page/admin-dashboard-page.component';
import { BrandAddFormComponent } from './components/pages/admin-dashboard-page/brands-dashboard/brand-add-form/brand-add-form.component';
import { BrandEditFormComponent } from './components/pages/admin-dashboard-page/brands-dashboard/brand-edit-form/brand-edit-form.component';
import { BrandsDashboardComponent } from './components/pages/admin-dashboard-page/brands-dashboard/brands-dashboard.component';
import { CarAddFormComponent } from './components/pages/admin-dashboard-page/cars-dashboard/car-add-form/car-add-form.component';
import { CarEditFormComponent } from './components/pages/admin-dashboard-page/cars-dashboard/car-edit-form/car-edit-form.component';
import { CarImageFormComponent } from './components/pages/admin-dashboard-page/cars-dashboard/car-image-form/car-image-form.component';
import { CarsDashboardComponent } from './components/pages/admin-dashboard-page/cars-dashboard/cars-dashboard.component';
import { ColourAddFormComponent } from './components/pages/admin-dashboard-page/colours-dashboard/colour-add-form/colour-add-form.component';
import { ColourEditFormComponent } from './components/pages/admin-dashboard-page/colours-dashboard/colour-edit-form/colour-edit-form.component';
import { ColoursDashboardComponent } from './components/pages/admin-dashboard-page/colours-dashboard/colours-dashboard.component';
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
    canActivate: [LoginGuard],
    component: WalletPageComponent
  },
  {
    path: 'account',
    canActivate: [LoginGuard],
    component: AccountPageComponent,
  },
  {
    path: 'admin',
    component: AdminDashboardPageComponent,
    canActivate: [LoginGuard, AdminGuard],
    children: [
      {
        path: 'cars',
        component: CarsDashboardComponent,
      },
      {
        path: 'cars/add',
        component: CarAddFormComponent,
      },
      {
        path: 'cars/edit/:id',
        component: CarEditFormComponent,
      },
      {
        path: 'cars/edit/images/:carId',
        component: CarImageFormComponent,
      },
      {
        path: 'brands',
        component: BrandsDashboardComponent,
      },
      {
        path: 'brands/add',
        component: BrandAddFormComponent,
      },
      {
        path: 'brands/edit/:id',
        component: BrandEditFormComponent,
      },
      {
        path: 'colours',
        component: ColoursDashboardComponent,
      },
      {
        path: 'colours/add',
        component: ColourAddFormComponent,
      },
      {
        path: 'colours/edit/:id',
        component: ColourEditFormComponent,
      },
    ]
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
