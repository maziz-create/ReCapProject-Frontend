import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  {path:"", component:CarComponent},
  {path:"cars", component:CarComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/colour/:colourId", component:CarComponent},
  {path:"cars/car/:carId", component:CarDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
