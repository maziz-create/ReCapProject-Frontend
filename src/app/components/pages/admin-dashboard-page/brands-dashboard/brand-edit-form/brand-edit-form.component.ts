import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/Entity/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-edit-form',
  templateUrl: './brand-edit-form.component.html',
  styleUrls: ['./brand-edit-form.component.css']
})
export class BrandEditFormComponent implements OnInit {

  brand!: Brand;
  brandEditForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getBrandIdFromParam();
  }

  createBrandForm() {
    this.brandEditForm = this.formBuilder.group({
      name: [this.brand.brandName, Validators.required],
    });
  }

  getBrandIdFromParam() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) this.getBrandById(params['brandId']);
    });
  }

  getBrandById(brandId: number) {
    this.brandService.getBrandById(brandId).subscribe((response) => {
      this.brand = response.data;
      //brand gelmeden form üretilemezdi...
      this.createBrandForm();
    });
  }

  update() {
    if (!this.brandEditForm.valid) {
      this.toastrService.error('There are missing fields.');
      return;
    }

    let brandModel: Brand = { id: this.brand.brandId, ...this.brandEditForm.value };
    this.brandService.update(brandModel).subscribe((response) => {
      this.toastrService.success("Güncelleme başarılı!");
      this.router.navigate(['admin', 'brands']); // => go to brand dashboard
    });
  }

  delete() {
    //window.confirm işlevli...
    if (window.confirm('Are you sure delete brand?')) {
      let brandModel: Brand = {
        id: this.brand.brandId,
        ...this.brandEditForm.value,
      };
      this.brandService.delete(brandModel).subscribe((response) => {
        this.toastrService.success("Silme başarılı!");
        this.router.navigate(['admin', 'brands']);
      });
    }
  }
}
