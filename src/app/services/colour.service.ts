import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Colour } from '../models/Entity/colour';
import { ListResponseModel } from '../models/ResponseModels/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColourService {

  apiUrl = "https://localhost:44354/api";
  constructor(private httpClient:HttpClient) { }

  getColours():Observable<ListResponseModel<Colour>> {
    let newPath = this.apiUrl+"/colours/getall";
    return this.httpClient.get<ListResponseModel<Colour>>(newPath);
  }
}
