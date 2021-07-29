import { Pipe, PipeTransform } from '@angular/core';
import { Colour } from '../models/Entity/colour';

@Pipe({
  name: 'filterColour'
})
export class FilterColourPipe implements PipeTransform {

  transform(value: Colour[], filterText: string): Colour[] {
    return value.filter((c: Colour) =>
      c.colourName.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
    );
  }
}
