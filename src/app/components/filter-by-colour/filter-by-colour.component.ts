import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Colour } from 'src/app/models/Entity/colour';
import { ColourService } from 'src/app/services/colour.service';

@Component({
  selector: 'app-filter-by-colour',
  templateUrl: './filter-by-colour.component.html',
  styleUrls: ['./filter-by-colour.component.css']
})
export class FilterByColourComponent implements OnInit {

  colours: Colour[] = [];
  dataLoaded: boolean = false;
  activeColourName?: string;
  filterText: string = '';

  constructor(
    private colourService: ColourService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getColours();
    this.getActiveColourFromParam();
  }
  getActiveColourFromParam() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['colourName']) this.setActiveColour(params['colourName']);
    });
  }

  getColours() {
    this.colourService.getColours().subscribe((response) => {
      this.colours = response.data;
      this.dataLoaded = true;
    });
  }

  setActiveColour(colourName?: string) {
    this.activeColourName = colourName;
  }

  isActive(colourName?: string): string {
    return this.activeColourName == colourName ? 'btn-primary' : '';
  }

  routeToCarsByColour(event: any) {
    let targetValue: string = event.target.value;

    if (!targetValue) {
      this.setActiveColour();
      this.router.navigateByUrl('');
    } else {
      this.setActiveColour(targetValue);
      this.router.navigateByUrl(
        `${this.router.url.includes('/cars') ? '.' : '/cars'}/colour/${this.activeColourName
        }`
      );
    }
  }

  isSelected(colourName?: string): boolean {
    return this.activeColourName == colourName;
  }

  getNavigateByUrl(): string {
    return `${this.router.url.includes('/cars') ? '.' : '/cars'}/colour/${this.activeColourName
      }`;
  }
}
