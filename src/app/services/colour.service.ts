import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Colour } from '../models/Entity/colour';
import { ListResponseModel } from '../models/ResponseModels/listResponseModel';
import { SingleResponseModel } from '../models/ResponseModels/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColourService {

  apiUrl = "https://localhost:44354/api/colours/";
  constructor(private httpClient:HttpClient) { }

  getColours():Observable<ListResponseModel<Colour>> {
    let newPath = this.apiUrl+"getall";
    return this.httpClient.get<ListResponseModel<Colour>>(newPath);
  }

  getColourById(colourId: number): Observable<SingleResponseModel<Colour>> {
    let newPath = this.apiUrl+"getbyid?id="+colourId;
    return this.httpClient.get<SingleResponseModel<Colour>>(newPath);
  }
}
