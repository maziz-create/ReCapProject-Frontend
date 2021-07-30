import { Component, Input, OnInit } from '@angular/core';
import { CarDetailDto } from 'src/app/models/Dto/carDetailDto';
import { CarImage } from 'src/app/models/Entity/carImage';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit {

  @Input() carDetail!: CarDetailDto;
  carImage!: CarImage;
  carImageUrl: string = '';

  constructor(private carImageService: CarImageService) { }

  ngOnInit(): void {
    this.getCarImage();
  }

  getCarImage() {
    this.carImageService
      .getImagesByCarId(this.carDetail.carId)
      .subscribe((response) => {
        this.carImage = response.data[0]; //arabanın kaç resmi olursa olsun, ilk resmini gönder.
        this.carImageUrl = this.carImageService.getCarImageUrl(this.carImage.id);
      });
  }

}
