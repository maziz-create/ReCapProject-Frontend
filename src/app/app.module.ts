import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
// import { HiddenCreditCardNoPipe } from './pipes/hidden-credit-card-no.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { ColourComponent } from './components/colour/colour.component';
import { NaviComponent } from './components/navi/navi.component';
import { UserComponent } from './components/user/user.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { CarFilterPipePipe } from './pipes/car-filter-pipe.pipe';
import { BrandFilterPipePipe } from './pipes/brand-filter-pipe.pipe';
import { ColorFilterPipePipe } from './pipes/color-filter-pipe.pipe';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { CarFilterComponent } from './components/car/car-filter/car-filter/car-filter.component';
import { HiddenCreditCardNoPipe } from './pipes/hidden-credit-card-no.pipe';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';


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
    CarFilterPipePipe,
    BrandFilterPipePipe,
    ColorFilterPipePipe,
    CarFilterComponent,
    CheckoutPageComponent,
    HiddenCreditCardNoPipe,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
