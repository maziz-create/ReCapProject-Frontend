import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetailDtoResponseModel } from '../models/ResponseModels/rentalDetailDtoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  
  apiUrl = "https://localhost:44354/api";

  constructor(private httpClient:HttpClient) { }

  getRentalDetails():Observable<RentalDetailDtoResponseModel>{
    let newPath=this.apiUrl+"/rentals/getrentaldetails";
    return this.httpClient.get<RentalDetailDtoResponseModel>(newPath);
  }

}
