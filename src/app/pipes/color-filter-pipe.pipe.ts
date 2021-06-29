import { Pipe, PipeTransform } from '@angular/core';
import { Colour } from '../models/Entity/colour';

@Pipe({
  name: 'colorFilterPipe'
})
export class ColorFilterPipePipe implements PipeTransform {

  transform(value: Colour[], filterText: string): Colour[] {
    filterText = filterText?filterText.toLocaleLowerCase():"";
    return filterText?value.filter((c:Colour)=>c.colourName.toLocaleLowerCase().indexOf(filterText)!==-1)
    :value;
  }

}
