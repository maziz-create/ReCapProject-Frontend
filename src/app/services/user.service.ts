import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/Entity/user';
import { ListResponseModel } from '../models/ResponseModels/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "https://localhost:44354/api";
  constructor(private httpClient:HttpClient) { }

  getUsers():Observable<ListResponseModel<User>>{
    let newPath = this.apiUrl + "/users/getall";
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }

}
