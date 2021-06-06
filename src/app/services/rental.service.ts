import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetailDto } from '../models/Dto/rentalDetailDto';
import { ListResponseModel } from '../models/ResponseModels/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  
  apiUrl = "https://localhost:44354/api";

  constructor(private httpClient:HttpClient) { }

  getRentalDetails():Observable<ListResponseModel<RentalDetailDto>>{
    let newPath=this.apiUrl+"/rentals/getrentaldetails";
    return this.httpClient.get<ListResponseModel<RentalDetailDto>>(newPath);
  }

}
