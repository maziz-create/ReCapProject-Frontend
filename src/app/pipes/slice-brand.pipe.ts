import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/Entity/brand';

//pipe ne demek? sana yolladığımız datayı bizim istediğimiz şekilde bize geri gönder.
//hazır bir pipe'da kullanabilirsin fakat kendin de pipe üretebilirsin, burası gibi.
//pipe biraz map'lemek gibi bir şey...

@Pipe({
  name: 'sliceBrand'
})
export class SliceBrandPipe implements PipeTransform {

  transform(value: Brand[], length: number): Brand[] {
    //0. index ile gönderilen yere kadarki elemanları yeni bir dizi yapıp gönderiyor istenilen yere.
    return value.slice(0, length);
  }

}
