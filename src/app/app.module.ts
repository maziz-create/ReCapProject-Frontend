import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColourComponent } from './components/colour/colour.component';
import { NaviComponent } from './components/navi/navi.component';
import { UserComponent } from './components/user/user.component';
import { RentalComponent } from './components/rental/rental.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { HiddenCreditCardNoPipe } from './pipes/hidden-credit-card-no.pipe';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { OverlayComponent } from './components/pages/homepage/overlay/overlay.component';
import { SearchComponent } from './components/search/search.component';
import { FilterByBrandBarComponent } from './components/pages/homepage/filter-by-brand-bar/filter-by-brand-bar.component';
import { SliceBrandPipe } from './pipes/slice-brand.pipe';
import { CarsPageComponent } from './components/pages/cars-page/cars-page.component';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { FilterCarPipe } from './pipes/filter-car.pipe';
import { FilterBrandPipe } from './pipes/filter-brand.pipe';
import { FilterColourPipe } from './pipes/filter-colour.pipe';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { FilterCarDetailPipe } from './pipes/filter-car-detail.pipe';
import { CarCardComponent } from './components/car-card/car-card.component';
import { CarDetailPageComponent } from './components/pages/car-detail-page/car-detail-page.component';
import { StoreModule } from '@ngrx/store';
import { AppReducers } from './store/app.reducer';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ColourComponent,
    NaviComponent,
    UserComponent,
    RentalComponent,
    CheckoutPageComponent,
    HiddenCreditCardNoPipe,
    NotFoundPageComponent,
    FooterComponent,
    HomepageComponent,
    OverlayComponent,
    SearchComponent,
    FilterByBrandBarComponent,
    SliceBrandPipe,
    CarsPageComponent,
    CarFilterComponent,
    FilterCarPipe,
    FilterBrandPipe,
    FilterColourPipe,
    CarsListComponent,
    LoadingSpinnerComponent,
    FilterCarDetailPipe,
    CarCardComponent,
    CarDetailPageComponent,
    LoginPageComponent,
    PasswordInputComponent,
    RegisterPageComponent
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
    }),
    StoreModule.forRoot(AppReducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
