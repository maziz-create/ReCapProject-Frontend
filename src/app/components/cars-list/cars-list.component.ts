import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/Dto/carDetailDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  carDetails: CarDetailDto[] = [];
  dataLoaded: boolean = false; //data'nın yüklenmesinin gecikmesi durumunda spinner gösterilecek.

  @Input() carFilterText: string = ''; //parent'tan doldurulmuş olarak gelecek.
  @Input() class: string = ''; //parent'larda kullanırken bootstrap class'ı ile col belirleyeceğiz.
  @Input() id: string = 'cars-list'

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['brandName'] && params['colourName']) {
        this.getCarDetailsByBrandNameAndColourName(params['brandName'], params['colourName']);
      }
      else if(params['brandName']) {
        this.getCarDetailsByBrandName(params['brandName']);
      }
      else if(params['colourName']) {
        this.getCarDetailsByColourName(params['colourName']);
      }
      else {
        this.getCarDetails();
      }
    })
  }

  getCarDetails() {
    this.carService.getCarDetails().subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    })
  }

  getCarDetailsByBrandName(brandName: string) {
    this.carService.getCarDetailsByBrandName(brandName).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    })
  }

  getCarDetailsByColourName(colourName: string) {
    this.carService.getCarDetailsByBrandName(colourName).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    })
  }

  getCarDetailsByBrandNameAndColourName(brandName: string, colourName: string) {
    this.carService.getCarDetailsByBrandNameAndColourName(brandName, colourName).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    })
  }

}
