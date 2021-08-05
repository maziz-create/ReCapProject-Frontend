import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Findeks } from '../models/Entity/findeks';
import { SingleResponseModel } from '../models/ResponseModels/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class FindeksService {

  apiUrl = "https://localhost:44354/api/findeks/";

  constructor(private httpClient: HttpClient) { }

  getByCustomerId(customerId: number): Observable<SingleResponseModel<Findeks>> {
    let newPath = this.apiUrl + "getbycustomerid?customerid=" + customerId;
    return this.httpClient.get<SingleResponseModel<Findeks>>(newPath);
  }

  getByUserId(userId: number): Observable<SingleResponseModel<Findeks>> {
    let newPath = this.apiUrl + "getbyuserid?userid=" + userId;
    return this.httpClient.get<SingleResponseModel<Findeks>>(newPath);
  }
}
