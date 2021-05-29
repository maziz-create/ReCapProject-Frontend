import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailResponseModel } from 'src/app/models/ResponseModels/carDetailResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44354/api";
  constructor(private httpClient: HttpClient) { }

  getCarDetails(): Observable<CarDetailResponseModel> {
    let newPath = this.apiUrl + "/cars/getcardetails";
    return this.httpClient.get<CarDetailResponseModel>(newPath);
  }
}
