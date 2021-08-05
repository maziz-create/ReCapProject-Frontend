import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/Entity/brand';
import { Colour } from 'src/app/models/Entity/colour';
import { BrandService } from 'src/app/services/brand.service';
import { ColourService } from 'src/app/services/colour.service';

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.css']
})
export class CarFilterComponent implements OnInit {
  brands: Brand[] = [];
  colours: Colour[] = [];
  activeBrandName?: string = '';
  activeColourName?: string = '';
  brandFilterText: string = '';
  colourFilterText: string = '';
  carFilterText: string = '';

  @Output() carFilterTextEvent = new EventEmitter<string>();
  /* ben child component'ım. parent'ıma ya da parent'larıma carFilterText'i göndereceğim. carFilterText'i bir event yayarak onlara ileteceğim.
   carFilterText'in içeriğini dolduracan olan benim. Data, benden parent'ıma yayılıyor. Bu yüzden zaten Output olarak oluşturuldum.
   Oluşturulan output EventEmitter sınıfının bir instance'ını yaratmalı. Bu instance ' ın .emit methodu ile yayacağım datayı parent'ıma.
   parent'ım ise benim yolladığım datayı nasıl alıyor?
   <app-car-filter (carFilterTextEvent)="receiveCarFilterText($event)"></app-car-filter> şeklinde... ürettiğim outputu () içine alarak event oluşturuyor ve
   yolladığım datayı fonksiyonda $event olarak kullanıyor. orada $event dediği şey benim sendCarFilterText fonksiyonumdaki 
   this.CarFilterTextEvent.emit(this.carFilterText); ... car filterText kısmı yani. Bu ise html kısmımdaki [(ngModel)]="carFilterText" 'in bağlı olduğu
   inputtan geliyor.
   not: Birden çok parent'ım olabilir. Bu örnekteki parent'ım => cars-page
   */


  @Input() isCompact: boolean = false; //ben child component'im. parent'ım bana isCompact'ı gönderecek.
  // Parent'ım => cars-dashboard. o bana isCompact'ı true olarak gönderirse ayrı bir form, hiç göndermezse ben onu false yaparaktan ayrı bir form gösteriyorum.
  // Data parent'ımdan bana gelecek. Bu yüzden Input olarak oluşturuldum.
  // Parent'ım bana isCompact datasını kendi html sayfasından şu şekilde gönderiyor=> <app-car-filter [isCompact]="true"></app-car-filter> . app-car-filter = benim, yani child component.

  constructor(
    private brandService: BrandService,
    private colourService: ColourService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColours();
    this.getActivesFromParams();
  }

  getActivesFromParams() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['brand']) this.activeBrandName = params['brand'];
      if (params['colour']) this.activeColourName = params['colour'];
    });
  }

  getBrands() {
    this.brandService
      .getBrands()
      .subscribe((response) => (this.brands = response.data));
  }

  getColours() {
    this.colourService
      .getColours()
      .subscribe((response) => (this.colours = response.data));
  }

  sendCarFilterText() {
    this.carFilterTextEvent.emit(this.carFilterText);
  }

  //true dönerse seçili option'u silme.
  //false gelirse seçili option'u sil. çünkü yeni gelen data eski datadan farklı...
  isBrandSelected(brandName?: string): boolean {
    return this.activeBrandName === brandName;
  }

  isColourSelected(colourName?: string): boolean {
    return this.activeColourName === colourName;
  }

}
