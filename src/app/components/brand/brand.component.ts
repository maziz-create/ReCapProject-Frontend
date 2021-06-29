import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/Entity/brand';
import { ColourService } from 'src/app/services/colour.service';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  
  title="Brand List";
  brands: any;
  currentBrand: any;
  dataLoaded = false;
  filterText="";

  constructor(private brandService:BrandService, private colourService:ColourService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data;
      this.dataLoaded = true;
    })
  }

  setCurrentBrand(brand: Brand){
    this.currentBrand = brand;
  }

  setCurrentAllBrand(){
    this.currentBrand = {brandId:0, brandName:"all"}
  }

  getCurrentBrandClass(brand: Brand){
    if (brand == this.currentBrand) {
      return "list-group-item active";
    }
    else{
      return "list-group-item";
    }
  }

  getAllBrandClass(){
   if (!this.currentBrand || this.currentBrand == {brandId:0, brandName:"all"}) {
    return "list-group-item active";
   }
   else {
     return "list-group-item";
   }
  }

  clearCurrentBrand(){
    this.currentBrand = {brandId:0, brandName:''}
  }
}