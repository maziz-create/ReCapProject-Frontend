import { Component, OnInit } from '@angular/core';
import { CarDetailDto } from 'src/app/models/Dto/carDetailDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cardetails: CarDetailDto[] = [];
  dataLoaded = false;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getCarDetails();
  }

  getCarDetails() {
    this.carService.getCarDetails().subscribe(response => {
      this.cardetails = response.data;
      this.dataLoaded = true;
    })
  }
}