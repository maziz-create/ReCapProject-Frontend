import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';

const routes: Routes = [
  // {path:'',pathMatch:"full", component:CarComponent},
  {
    path: '', pathMatch: "full",
    component: HomepageComponent
  },
  {
    path: 'cars',
    component: CarComponent
  },
  // {
  //   path: 'cars',
  //   component: CarsPageComponent,
  // },
  { path: 'cars/brand/:brandId', component: CarComponent },
  { path: 'cars/colour/:colourId', component: CarComponent },
  { path: 'cars/car/:carId', component: CarDetailComponent },
  { path: 'cars/filter/:brandId/:colourId', component: CarComponent },
  { path: 'checkout', component: CheckoutPageComponent },
  { path: '404', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
