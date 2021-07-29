import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/Entity/carImage';
import { ListResponseModel } from '../models/ResponseModels/listResponseModel';
import { ResponseModel } from '../models/ResponseModels/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl = "https://localhost:44354/api/";

  constructor(private httpClient: HttpClient) { }

  getImagesByCarId(id: number): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + "getimagesbycarid?id=" + id;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  add(carId: number, file: File): Observable<ResponseModel> {
    const formData: FormData = new FormData();
    formData.append('CarId', carId.toString());
    formData.append('Image', file);

    let newPath = this.apiUrl + "add";

    return this.httpClient.post<ResponseModel>(newPath,
      formData,
      {
        reportProgress: true,
        responseType: 'json',
      }
    )
  }
  
  delete(carImage: CarImage): Observable<ResponseModel> {
    let newPath = this.apiUrl + "delete";
    return this.httpClient.post<ResponseModel>(newPath, carImage.id);
  }

  //bu, resmin kendisini alıyor.
  getFileById(id: number): Observable<string> {
    let newPath = this.apiUrl + "getfilebyid?id="+id;
    return this.httpClient.get<string>(newPath);
  }

  //bu, resmin url'ini alıyor.
  getCarImageUrl(id: number): string {
    let newPath = this.apiUrl + "getfilebyid?id="+id;
    return newPath;
  }
}
