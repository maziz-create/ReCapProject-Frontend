import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/Entity/customer';
import { ResponseModel } from '../models/ResponseModels/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = "https://localhost:44354/api/customers/";

  constructor(private httpClient: HttpClient) { }

  add(customer: Customer): Observable<ResponseModel> {
    let newPath = this.apiUrl + "add";
    return this.httpClient.post<ResponseModel>(newPath, customer);
  }
}
