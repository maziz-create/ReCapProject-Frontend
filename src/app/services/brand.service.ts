import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ResponseModels/listResponseModel';
import { Brand } from '../models/Entity/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "https://localhost:44354/api";
  constructor(private httpClient: HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    let newPath=this.apiUrl+"/brands/getall"
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }
  }