import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDetailDto } from 'src/app/models/Dto/carDetailDto';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';
import { Rental } from 'src/app/models/Entity/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  defaultImg="/images/default2.jpg";
  imageBasePath = environment.baseUrl;
  checkRental:number;
  rentDate: Date;
  returnDate: Date;
  cardetails: CarDetailDto[] = [];

  constructor(
    private carService: CarService, 
    private activatedRoute: ActivatedRoute, 
    private rentalService: RentalService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.getCarDetail(params["carId"]);
      }
    })
  }

  getCarDetail(carId: number) {
    this.carService.getCarDetail(carId).subscribe(response => {
      this.cardetails = response.data;
    })
  }

  addRental() {
    let rental : Rental = {
      carId : this.cardetails[0].carId,
      userId : 2,
      rentDate : this.rentDate,
      returnDate : this.returnDate
  }

  this.router.navigateByUrl('/checkout');


}
}
