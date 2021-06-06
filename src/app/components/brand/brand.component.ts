import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/Entity/brand';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  title="Marka Listesi";
  brands: Brand[] = [];
  currentBrand: Brand;
  dataLoaded = false;

  constructor(private brandService:BrandService) { }

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
    // console.log(brand.brandId);
    // console.log(brand.brandName);
  }

  getCurrentBrandClass(brand: Brand){
    if (brand == this.currentBrand) {
      return "list-group-item active";
    }
    else{
      return "list-group-item";
    }
  }
}

