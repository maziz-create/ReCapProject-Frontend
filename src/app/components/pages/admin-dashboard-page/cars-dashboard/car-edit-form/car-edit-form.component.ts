import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/Entity/brand';
import { Car } from 'src/app/models/Entity/car';
import { CarImage } from 'src/app/models/Entity/carImage';
import { Colour } from 'src/app/models/Entity/colour';
import { BrandService } from 'src/app/services/brand.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { ColourService } from 'src/app/services/colour.service';

@Component({
  selector: 'app-car-edit-form',
  templateUrl: './car-edit-form.component.html',
  styleUrls: ['./car-edit-form.component.css']
})
export class CarEditFormComponent implements OnInit {

  car!: Car;
  carDataLoaded: boolean = false;
  brands: Brand[] = [];
  colours: Colour[] = [];
  carImages: CarImage[] = [];
  carEditForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private carService: CarService,
    private brandService: BrandService,
    private colourService: ColourService,
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCarIdFromParam();
    this.getBrands();
    this.getColours();
  }

  getCarIdFromParam() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) this.getCarById(params['carId']);
    });
  }

  getCarById(carId: number) {
    this.carService.getCarById(carId).subscribe((response) => {
      this.car = response.data;
      this.carDataLoaded = true;
      this.createCarForm();
      this.getCarImagesById(this.car.id);
    });
  }

  getCarImagesById(carId: number) {
    this.carImageService.getImagesByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
    });
  }

  createCarForm() {
    this.carEditForm = this.formBuilder.group({
      name: [this.car.name, Validators.required],
      brandId: [this.car.brandId, Validators.required],
      colorId: [this.car.colourId, Validators.required],
      dailyPrice: [this.car.dailyPrice, Validators.required],
      minFindeksScore: [this.car.minFindeksScore, Validators.required],
      modelYear: [this.car.modelYear, Validators.required],
      description: [this.car.description, Validators.required],
      brandFilterText: [''],
      colorFilterText: [''],
    });
  }

  getBrands() {
    this.brandService
      .getBrands()
      .subscribe((response) => (this.brands = response.data));
  }

  getColours() {
    this.colourService
      .getColours().subscribe((response) => {
        this.colours = response.data
      });
  }

  update() {
    if (!this.carEditForm.valid) {
      this.toastrService.warning('There are missing fields.');
      return;
    }

    let carModel: Car = { id: this.car.id, ...this.carEditForm.value };
    this.carService.update(carModel).subscribe((response) => {
      this.toastrService.success(response.message);
      this.router.navigate(['admin', 'cars']);
    });
  }

  delete() {
    if (window.confirm('Are you sure to delete car?')) this.deleteCarImages();
  }

  deleteCar() {
    let carModel: Car = { id: this.car.id, ...this.carEditForm.value };
    this.carService.delete(carModel).subscribe((response) => {
      this.toastrService.success(response.message);
      this.router.navigate(['admin', 'cars']);
    });
  }

  deleteCarImages() {
    this.carImages.forEach((carImage, index) => {
      if (carImage.id !== 0) {
        this.carImageService.delete(carImage).subscribe((response) => {
          this.toastrService.success(carImage.date.toString(), response.message);
        });
      }
      if (index == this.carImages.length - 1) this.deleteCar();
    });
  }

}
