import { Component, OnInit } from '@angular/core';
import { Colour } from 'src/app/models/Entity/colour';
import { ColourService } from 'src/app/services/colour.service';

@Component({
  selector: 'app-colours-dashboard',
  templateUrl: './colours-dashboard.component.html',
  styleUrls: ['./colours-dashboard.component.css']
})
export class ColoursDashboardComponent implements OnInit {

  colours: Colour[] = [];

  constructor(
    private colourService: ColourService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.colourService.getColours().subscribe((response) => {
      this.colours = response.data;
    })
  }

}
