import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ResponseModels/listResponseModel';
import { Brand } from '../models/Entity/brand';
import { SingleResponseModel } from '../models/ResponseModels/singleResponseModel';
import { ResponseModel } from '../models/ResponseModels/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "https://localhost:44354/api/brands/";
  constructor(private httpClient: HttpClient) { }

  add(brand: Brand): Observable<ResponseModel> {
    let newPath = this.apiUrl + "add";
    return this.httpClient.post<ResponseModel>(newPath, brand);
  }

  update(brand: Brand): Observable<ResponseModel> {
    let newPath = this.apiUrl + "update";
    return this.httpClient.post<ResponseModel>(newPath, brand);
  }

  delete(brand: Brand): Observable<ResponseModel> {
    let newPath = this.apiUrl + "delete";
    return this.httpClient.post<ResponseModel>(newPath, brand);
  }

  getBrands(): Observable<ListResponseModel<Brand>> {
    let newPath = this.apiUrl + "getall";
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  getBrandById(brandId: number): Observable<SingleResponseModel<Brand>> {
    let newPath = this.apiUrl + "getbyid?id=" + brandId;
    return this.httpClient.get<SingleResponseModel<Brand>>(newPath);
  }
}