import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDto } from '../models/Dto/carDetailDto';
import { CarImage } from '../models/Entity/carImage';
import { ListResponseModel } from '../models/ResponseModels/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44354/api/";
  constructor(private httpClient: HttpClient) { }

  getCarDetails(): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + "cars/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarDetailsByBrand(brandId:number): Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + "cars/getcardetailsbybrand?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarDetailsByColour(colourId:number): Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + "cars/getcardetailsbycolour?colourId="+colourId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarDetail(carId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + "cars/getcardetail?id="+carId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
}