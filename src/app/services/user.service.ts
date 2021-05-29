import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponseModel } from '../models/ResponseModels/userResponseModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "https://localhost:44354/api";
  constructor(private httpClient:HttpClient) { }

  getUsers():Observable<UserResponseModel>{
    let newPath = this.apiUrl + "/users/getall";
    return this.httpClient.get<UserResponseModel>(newPath);
  }

}
