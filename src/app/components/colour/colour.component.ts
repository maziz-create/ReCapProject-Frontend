import { Component, OnInit } from '@angular/core';
import { Colour } from 'src/app/models/Entity/colour';
import { ColourService } from 'src/app/services/colour.service';

@Component({
  selector: 'app-colour',
  templateUrl: './colour.component.html',
  styleUrls: ['./colour.component.css']
})
export class ColourComponent implements OnInit {

  title="Colour List"
  colours:any; 
  currentColour:any;
  dataLoaded = false;
  filterText="";

  constructor(private colourService:ColourService) { }

  ngOnInit(): void {
    this.getColours();
  }

  getColours(){
    this.colourService.getColours().subscribe(response => {
      this.colours = response.data;
      this.dataLoaded = true;
    })
  } 
}