import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { ColourComponent } from './components/colour/colour.component';
import { NaviComponent } from './components/navi/navi.component';
import { UserComponent } from './components/user/user.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    CarComponent,
    ColourComponent,
    NaviComponent,
    UserComponent,
    RentalComponent,
    CarDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
