import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/Dto/carDetailDto';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  defaultImg="/images/default2.jpg";
  imageBasePath = environment.baseUrl;
  cardetails: CarDetailDto[] = [];
  constructor(private carService: CarService, private activatedRoute: ActivatedRoute) { }

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

}
