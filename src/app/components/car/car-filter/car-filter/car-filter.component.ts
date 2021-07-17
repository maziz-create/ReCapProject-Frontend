import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/Entity/brand';
import { Colour } from 'src/app/models/Entity/colour';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColourService } from 'src/app/services/colour.service';

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.css']
})
export class CarFilterComponent implements OnInit {

  brands: Brand[] = [];
  colours: Colour[] = [];
  currentBrandId:number;
  currentColourId:number;

  constructor(private brandService:BrandService, private colourService:ColourService) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColours();
  }

  getBrands() {
    this.brandService.getBrands().subscribe(response => {
       this.brands = response.data;
    })
  }

  getColours() {
    this.colourService.getColours().subscribe(response => {
      this.colours = response.data;
    })
  }

  setCurrentBrand(brandId:number) {
    return(brandId===this.currentBrandId?true:false);
  }

  setCurrentColour(colourId:number){
    return(colourId===this.currentColourId?true:false)
  }

}
