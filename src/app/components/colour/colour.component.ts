import { Component, OnInit } from '@angular/core';
import { Colour } from 'src/app/models/Entity/colour';
import { ColourService } from 'src/app/services/colour.service';

@Component({
  selector: 'app-colour',
  templateUrl: './colour.component.html',
  styleUrls: ['./colour.component.css']
})
export class ColourComponent implements OnInit {

  title="Renk Listesi"
  colours: Colour[] = [];
  currentColour: Colour;
  dataLoaded = false;

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

  setCurrentColour(colour:Colour){
    this.currentColour = colour;
    // console.log(colour.colourName);
  }

  getCurrentColourClass(colour:Colour){
    if (this.currentColour == colour) {
      return "list-group-item active";
    }
    else{
      return "list-group-item";
    }
  }
}