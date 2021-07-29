import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailPageComponent } from './components/pages/car-detail-page/car-detail-page.component';
import { CarsPageComponent } from './components/pages/cars-page/cars-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '', pathMatch: "full",
    component: HomepageComponent
  },
  {
    path: 'cars',
    component: CarsPageComponent
  },
  {
    path: 'checkout',
    component: CheckoutPageComponent
  },
  {
    path: '404',
    component: NotFoundPageComponent
  },
  {
    path: 'car/:carId',
    component: CarDetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
