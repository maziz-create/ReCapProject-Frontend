import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetailDto } from '../models/Dto/userDetailDto';
import { User } from '../models/Entity/user';
import { UserDetailUpdateModel } from '../models/Entity/userDetailUpdateModel';
import { ListResponseModel } from '../models/ResponseModels/listResponseModel';
import { ResponseModel } from '../models/ResponseModels/responseModel';
import { SingleResponseModel } from '../models/ResponseModels/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "https://localhost:44354/api/users/";
  constructor(private httpClient:HttpClient) { }

  getUsers():Observable<ListResponseModel<User>>{
    let newPath = this.apiUrl + "getall";
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }

  getUserDetailByEmail(userMail: string): Observable<SingleResponseModel<UserDetailDto>> {
    let newPath = this.apiUrl + "getuserdetailbyemail?email=" + userMail;
    return this.httpClient.get<SingleResponseModel<UserDetailDto>>(newPath);
  }

  updateUserDetails(userDetailUpdateModel:UserDetailUpdateModel): Observable<ResponseModel> {
    let newPath = this.apiUrl + "update";
    return this.httpClient.post<ResponseModel>(newPath, userDetailUpdateModel);
  }
}
