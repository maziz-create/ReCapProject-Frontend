import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDto } from '../models/Dto/carDetailDto';
import { Brand } from '../models/Entity/brand';
import { Car } from '../models/Entity/car';
import { CarImage } from '../models/Entity/carImage';
import { Colour } from '../models/Entity/colour';
import { ListResponseModel } from '../models/ResponseModels/listResponseModel';
import { SingleResponseModel } from '../models/ResponseModels/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44354/api/cars/";
  constructor(private httpClient: HttpClient) { }

  getCarDetails(): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + "getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarById(carId: number): Observable<SingleResponseModel<Car>> {
    let newPath = this.apiUrl + "getbyid?id="+carId;
    return this.httpClient.get<SingleResponseModel<Car>>(newPath);
  }

  getCarDetailsByBrand(brandId:number): Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + "getcardetailsbybrand?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarDetailsByColour(colourId:number): Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + "getcardetailsbycolour?colourId="+colourId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarDetail(carId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + "getcardetail?id="+carId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
 
  getCarDetailsByBrandIdAndColourId(brandId:number, colourId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + "getcarsbybrandidandcolourid?brandid="+brandId+"&&colourid="+colourId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarDetailsByBrandName(brandName: string): Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + "getcardetailsbybrandname?brandname="+brandName;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarDetailsByColourName(colourName: string): Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + "getcardetailsbycolourname?colourname="+colourName;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarDetailsByBrandNameAndColourName(brandName: string, colourName:string): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + "getcardetailsbybrandnameandcolourname?brandname="+brandName+"&&colourName="+colourName;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
}