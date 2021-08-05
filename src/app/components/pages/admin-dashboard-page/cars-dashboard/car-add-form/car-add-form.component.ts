import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/Entity/brand';
import { Car } from 'src/app/models/Entity/car';
import { Colour } from 'src/app/models/Entity/colour';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColourService } from 'src/app/services/colour.service';

@Component({
  selector: 'app-car-add-form',
  templateUrl: './car-add-form.component.html',
  styleUrls: ['./car-add-form.component.css']
})
export class CarAddFormComponent implements OnInit {

  brands: Brand[] = [];
  colours: Colour[] = [];
  carAddForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private carService: CarService,
    private brandService: BrandService,
    private colourService: ColourService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createCarForm();
    this.getBrands();
    this.getColours();
  }

  createCarForm() {
    this.carAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      brandId: ['', Validators.required],
      colourId: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      minFindeksScore: ['', Validators.required],
      modelYear: ['', Validators.required],
      description: ['', Validators.required],
      brandFilterText: [''],
      colourFilterText: [''],
    });
  }

  getBrands() {
    this.brandService
      .getBrands().subscribe((response) => {
        this.brands = response.data;
      })
  }

  getColours() {
    this.colourService.getColours().subscribe((response) => {
      this.colours = response.data;
    })
  }

  add() {
    if (!this.carAddForm.valid) {
      this.toastrService.error('There are missing fields.');
      return;
    }

    let carModule: Car = { ...this.carAddForm.value };
    this.carService.add(carModule).subscribe((response) => {
      this.toastrService.success(response.message);
      this.router.navigate(['admin', 'cars']);
    });
  }
}
