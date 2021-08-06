import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
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
import { LogoutPageComponent } from './components/pages/logout-page/logout-page.component';
import { WalletPageComponent } from './components/pages/wallet-page/wallet-page.component';
import { AccountPageComponent } from './components/pages/account-page/account-page.component';
import { AdminDashboardPageComponent } from './components/pages/admin-dashboard-page/admin-dashboard-page.component';
import { BrandsDashboardComponent } from './components/pages/admin-dashboard-page/brands-dashboard/brands-dashboard.component';
import { ColoursDashboardComponent } from './components/pages/admin-dashboard-page/colours-dashboard/colours-dashboard.component';
import { CarsDashboardComponent } from './components/pages/admin-dashboard-page/cars-dashboard/cars-dashboard.component';
import { BrandAddFormComponent } from './components/pages/admin-dashboard-page/brands-dashboard/brand-add-form/brand-add-form.component';
import { ColourAddFormComponent } from './components/pages/admin-dashboard-page/colours-dashboard/colour-add-form/colour-add-form.component';
import { BrandEditFormComponent } from './components/pages/admin-dashboard-page/brands-dashboard/brand-edit-form/brand-edit-form.component';
import { ColourEditFormComponent } from './components/pages/admin-dashboard-page/colours-dashboard/colour-edit-form/colour-edit-form.component';
import { CarAddFormComponent } from './components/pages/admin-dashboard-page/cars-dashboard/car-add-form/car-add-form.component';
import { CarEditFormComponent } from './components/pages/admin-dashboard-page/cars-dashboard/car-edit-form/car-edit-form.component';
import { CarImageFormComponent } from './components/pages/admin-dashboard-page/cars-dashboard/car-image-form/car-image-form.component';
import { FilterByColourComponent } from './components/filter-by-colour/filter-by-colour.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
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
    RegisterPageComponent,
    LogoutPageComponent,
    WalletPageComponent,
    AccountPageComponent,
    AdminDashboardPageComponent,
    BrandsDashboardComponent,
    ColoursDashboardComponent,
    CarsDashboardComponent,
    BrandAddFormComponent,
    ColourAddFormComponent,
    BrandEditFormComponent,
    ColourEditFormComponent,
    CarAddFormComponent,
    CarEditFormComponent,
    CarImageFormComponent,
    FilterByColourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right"
    }),
    StoreModule.forRoot(AppReducers)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
