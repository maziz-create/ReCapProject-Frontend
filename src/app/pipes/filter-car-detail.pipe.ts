import { Pipe, PipeTransform } from '@angular/core';
import { CarDetailDto } from '../models/Dto/carDetailDto';

//araba filtreler
@Pipe({
  name: 'filterCarDetail'
})
export class FilterCarDetailPipe implements PipeTransform {

  transform(value: CarDetailDto[], filterText: string): CarDetailDto[] {
    return value.filter((c:CarDetailDto) => 
    c.carName.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
    );
  }
}
