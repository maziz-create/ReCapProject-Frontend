import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/ResponseModels/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  apiUrl = "https://localhost:44354/api/";

  constructor(private httpClient: HttpClient) { }

  //Test
  payment(): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'payment'
    return this.httpClient.get<ResponseModel>(newPath);
  }
}
