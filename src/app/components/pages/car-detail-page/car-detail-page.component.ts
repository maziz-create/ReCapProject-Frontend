import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { UserDetailDto } from 'src/app/models/Dto/userDetailDto';
import { Brand } from 'src/app/models/Entity/brand';
import { Car } from 'src/app/models/Entity/car';
import { CarImage } from 'src/app/models/Entity/carImage';
import { Colour } from 'src/app/models/Entity/colour';
import { Rental } from 'src/app/models/Entity/rental';
import { AuthService } from 'src/app/services/auth.service';
import { BrandService } from 'src/app/services/brand.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { ColourService } from 'src/app/services/colour.service';
import { RentalService } from 'src/app/services/rental.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-car-detail-page',
  templateUrl: './car-detail-page.component.html',
  styleUrls: ['./car-detail-page.component.css']
})
export class CarDetailPageComponent implements OnInit {

  //alttaki (!:) işaretinin anlamını bilmiyorum.
  car!: Car;
  brand!: Brand;
  colour!: Colour;
  carImages!: CarImage[];
  DateTimeNow: Date = new Date();
  rentStartDate: Date = this.DateTimeNow;
  rentEndDate: Date = this.DateTimeNow;
  userDetail: UserDetailDto;

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private brandService: BrandService,
    private userService: UserService,
    private carService: CarService,
    private colourService: ColourService,
    private carImageService: CarImageService,
    private rentalService: RentalService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCarById(params['carId']);
    });
    this.getUserDetailsFromStore();
  }
  
  getUserDetailsFromStore() {
    this.authService.userDetail$.pipe(first()).subscribe((userDetail) => {
      if (!userDetail) return; //auth state'te userDetail yoksa eğer fonksiyonu durdur.
      this.getUserDetailDtoByUserId(userDetail.id); 
    });
  }

  getCarById(carId: number) {
    this.carService.getCarById(carId).subscribe((response) => {
      this.car = response.data;

      this.getBrandById(this.car.brandId);
      this.getColourById(this.car.colourId);
      this.getCarImagesById(this.car.id);
    });
  }

  getUserDetailDtoByUserId(userId: number) {
    this.userService.getUserDetailDtoByUserId(userId).subscribe((response) => {
      this.userDetail = response.data;
    })
  }

  getBrandById(brandId: number) {
    this.brandService
      .getBrandById(brandId)
      .subscribe((response) => (this.brand = response.data));
  }

  getColourById(colorId: number) {
    this.colourService
      .getColourById(colorId)
      .subscribe((response) => (this.colour = response.data));
  }

  getCarImagesById(carId: number) {
    this.carImageService
      .getImagesByCarId(carId)
      .subscribe((response) => (this.carImages = response.data));
  }

  rentCar() {
    if (!this.userDetail) {
      this.router.navigate(['login']);
      this.toastr.info('You must log in.');
      return;
    }
    let rental: Rental = {
      carId: this.car.id,
      customerId: this.userDetail.customerId,
      rentStartDate: new Date(this.rentStartDate),
      rentEndDate: new Date(this.rentEndDate),
      returnDate: undefined,
    };
    /*post olarak gönderdiğimiz isRentable '  ye burada subscribe olduğumuz zaman gelen istek pozitif ise eğer iç kısımlar çalışıyor. 
    Denetlenmesi bu şekilde yani. 
    Aynı şekilde belki araba müsait ama findeks score az kalıyor ise kiralanamayacağı için isRentable'ın içine yazdık checkFindeksScoreSufficiency ' i; */
    this.rentalService.isRentable(rental).subscribe(() => {
      this.rentalService.checkFindeksScoreSufficiency(rental).subscribe(() => {
        this.toastr.info('You are redirected to payment page.');
        this.rentalService.rentalCheckout = rental;
        this.router.navigateByUrl('/checkout');
      });
    });
  }

  isActiveCarousel(carImageIndex: number): string {
    return carImageIndex == 0 ? 'active' : '';
  }

  getCarImageUrl(carImageId: number): string {
    return this.carImageService.getCarImageUrl(carImageId);
  }

}