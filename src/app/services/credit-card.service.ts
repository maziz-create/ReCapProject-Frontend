import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from '../models/Entity/creditCard';
import { ListResponseModel } from '../models/ResponseModels/listResponseModel';
import { ResponseModel } from '../models/ResponseModels/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  apiUrl = "https://localhost:44354/api/";

  constructor(private httpClient:HttpClient) { }

  getAllByCustomerId(customerId: number): Observable<ListResponseModel<CreditCard>> {
    let newPath = this.apiUrl + 'creditcards/getallbycustomerid?customerId='+customerId;
    return this.httpClient.get<ListResponseModel<CreditCard>>(newPath);
  }

  add(creditCard: CreditCard): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'creditcards/add'
    return this.httpClient.post<ResponseModel>(newPath, creditCard);
  }

  delete(creditCard: CreditCard): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'creditcards/delete'
    return this.httpClient.post<ResponseModel>(newPath, creditCard);
  }

}
