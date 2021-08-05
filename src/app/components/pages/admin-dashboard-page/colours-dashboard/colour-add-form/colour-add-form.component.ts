import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Colour } from 'src/app/models/Entity/colour';
import { ColourService } from 'src/app/services/colour.service';

@Component({
  selector: 'app-colour-add-form',
  templateUrl: './colour-add-form.component.html',
  styleUrls: ['./colour-add-form.component.css']
})
export class ColourAddFormComponent implements OnInit {

  colourAddForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private colourService: ColourService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createColourForm();
  }

  createColourForm() {
    this.colourAddForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  add() {
    if (!this.colourAddForm.valid) {
      this.toastrService.error('There are missing fields.');
      return;
    }

    let colourModel: Colour = { ...this.colourAddForm.value };
    this.colourService.add(colourModel).subscribe((response) => {
      this.toastrService.success("Ekleme başarılı!");
      this.router.navigate(['admin', 'colours']); // /adminpath/coloursdashboard
    })
  }

}
