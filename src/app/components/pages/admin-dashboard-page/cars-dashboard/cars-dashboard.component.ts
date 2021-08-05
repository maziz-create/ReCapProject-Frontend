import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/Dto/carDetailDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars-dashboard',
  templateUrl: './cars-dashboard.component.html',
  styleUrls: ['./cars-dashboard.component.css']
})
export class CarsDashboardComponent implements OnInit {

  carDetails: CarDetailDto[] = [];
  dataLoaded: boolean = false;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['brand'] && params['colour'])
        this.getCarDetailsByBrandNameAndColourName(
          params['brand'],
          params['colour']
        );
      else if (params['brand']) this.getCarDetailsByBrand(params['brand']);
      else if (params['colour']) this.getCarDetailsByColour(params['colour']);
      else this.getCarDetails();
    });
  }

  getCarDetails() {
    this.carService.getCarDetails().subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetailsByBrand(brandName: string) {
    this.carService.getCarDetailsByBrandName(brandName).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetailsByColour(colourName: string) {
    this.carService.getCarDetailsByColourName(colourName).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetailsByBrandNameAndColourName(brandName: string, colourName: string) {
    this.carService
      .getCarDetailsByBrandNameAndColourName(brandName, colourName).subscribe((response) => {
        this.carDetails = response.data;
        this.dataLoaded = true;
      });
  }
}