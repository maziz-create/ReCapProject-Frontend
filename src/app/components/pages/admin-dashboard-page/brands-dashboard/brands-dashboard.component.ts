import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/Entity/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brands-dashboard',
  templateUrl: './brands-dashboard.component.html',
  styleUrls: ['./brands-dashboard.component.css']
})
export class BrandsDashboardComponent implements OnInit {

  brands: Brand[] = [];
  dataLoaded: Boolean = false;

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
    })
  }

}
