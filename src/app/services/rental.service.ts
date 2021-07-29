import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetailDto } from '../models/Dto/rentalDetailDto';
import { Rental } from '../models/Entity/rental';
import { ListResponseModel } from '../models/ResponseModels/listResponseModel';
import { ResponseModel } from '../models/ResponseModels/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  
  apiUrl = "https://localhost:44354/api/rentals";
  rentalCheckout?: Rental;

  checkIf:Boolean;

  constructor(private httpClient:HttpClient) { }

  getRentalDetails():Observable<ListResponseModel<RentalDetailDto>>{
    let newPath=this.apiUrl+"getrentaldetails";
    return this.httpClient.get<ListResponseModel<RentalDetailDto>>(newPath);
  }

  add(rental:Rental):Observable<ResponseModel> {
    let newPath = this.apiUrl + "add";
    return this.httpClient.post<ResponseModel>(newPath, rental);
  }

  isRentable(rental: Rental): Observable<ResponseModel> {
    let newPath = this.apiUrl + "isrentable";
    return this.httpClient.post<ResponseModel>(newPath, rental);
  }

  checkFindeksScoreSufficiency(rental: Rental): Observable<ResponseModel> {
    let newPath = this.apiUrl + "checkfindeksscoresufficiency";
    return this.httpClient.post<ResponseModel>(newPath, rental);
  }

}
