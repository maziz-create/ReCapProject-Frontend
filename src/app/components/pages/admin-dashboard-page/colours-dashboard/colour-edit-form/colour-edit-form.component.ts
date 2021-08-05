import { Component, OnInit } from '@angular/core';
import { FormGroup, Validator, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Colour } from 'src/app/models/Entity/colour';
import { ColourService } from 'src/app/services/colour.service';

@Component({
  selector: 'app-colour-edit-form',
  templateUrl: './colour-edit-form.component.html',
  styleUrls: ['./colour-edit-form.component.css']
})
export class ColourEditFormComponent implements OnInit {

  colour!: Colour;
  colourEditForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private colourService: ColourService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getColourIdFromParam();
  }

  createColourForm() {
    this.colourEditForm = this.formBuilder.group({
      name: [this.colour.colourName, Validators.required],
    });
  }

  getColourIdFromParam() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['colourId']) this.getColourById(params['colourId']);
    });
  }

  getColourById(colourId: number) {
    this.colourService.getColourById(colourId).subscribe((response) => {
      this.colour = response.data;

      this.createColourForm();
    });
  }

  update() {
    if (!this.colourEditForm.valid) {
      this.toastrService.error('There are missing fields.');
      return;
    }

    let colourModel: Colour = { id: this.colour.colourId, ...this.colourEditForm.value };
    this.colourService.update(colourModel).subscribe((response) => {
      this.toastrService.success(response.message);
      this.router.navigate(['admin', 'colours']);
    });
  }

  delete() {
    if (window.confirm('Are you sure delete colour?')) {
      let colourModule: Colour = {
        id: this.colour.colourId,
        ...this.colourEditForm.value,
      };
      this.colourService.delete(colourModule).subscribe((response) => {
        this.toastrService.success(response.message);
        this.router.navigate(['admin', 'colours']);
      });
    }
  }

}
