import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/Dto/carDetailDto';
import { Brand } from 'src/app/models/Entity/brand';
import { Car } from 'src/app/models/Entity/car';
import { CarImage } from 'src/app/models/Entity/carImage';
import { Colour } from 'src/app/models/Entity/colour';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  // ---
  imageBasePath = environment.baseUrl;
  defaultImg="/images/default2.jpg";
  // ----
  title = "Rental Car List";
  imgPath: string;
  cardetails: CarDetailDto[] = [];
  dataLoaded = false;
  filterText="";

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"] && params["colourId"]) {
        this.getCarDetailsByColourIdAndBrandId(params["brandId"], params["colourId"] );
      }
      else if (params["brandId"]) {
        this.getCarDetailsByBrand(params["brandId"]);
      }
      else if (params["colourId"]) {
        this.getCarDetailsByColour(params["colourId"]);
      }
      else {
        this.getCarDetails();
      }
    })
  }

  getCarDetails() {
    this.carService.getCarDetails().subscribe(response => {
      this.cardetails = response.data;
      this.dataLoaded = true;
    })
  }

  getCarDetailsByBrand(brandId: number) {
    this.carService.getCarDetailsByBrand(brandId).subscribe(response => {
      this.cardetails = response.data;
      this.dataLoaded = true;
    })
  }

  getCarDetailsByColour(colourId: number) {
    this.carService.getCarDetailsByColour(colourId).subscribe(response => {
      this.cardetails = response.data;
      this.dataLoaded = true;
    })
  }

  getCarDetailsByColourIdAndBrandId(brandId:number, colourId:number) {
    this.carService.getCarDetailsByBrandIdAndColourId(brandId,colourId).subscribe(response => {
      this.cardetails = response.data;
      this.dataLoaded = true;
    })
  }
}
