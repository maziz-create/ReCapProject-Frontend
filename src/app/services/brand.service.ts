import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrandResponseModel } from 'src/app/models/ResponseModels/brandResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "https://localhost:44354/api";
  constructor(private httpClient: HttpClient) { }

  getBrands():Observable<BrandResponseModel>{
    let newPath=this.apiUrl+"/brands/getall"
    return this.httpClient.get<BrandResponseModel>(newPath);
  }
  }