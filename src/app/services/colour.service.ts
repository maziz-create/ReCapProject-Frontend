import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColourResponseModel } from '../models/ResponseModels/colourResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColourService {

  apiUrl = "https://localhost:44354/api";
  constructor(private httpClient:HttpClient) { }

  getColours():Observable<ColourResponseModel> {
    let newPath = this.apiUrl+"/colours/getall";
    return this.httpClient.get<ColourResponseModel>(newPath);
  }
}
