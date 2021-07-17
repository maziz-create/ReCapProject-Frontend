import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
// import { UserDetailDto } from '../models/Dto/userDetailDto';
import { ResponseModel } from '../models/ResponseModels/responseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "https://localhost:44354/api/auth/";
  
  //tam alttaki şeyi yapma amacımız değişen userDetaili view'e bildirmek, view'i render etmek.
  
  // userDetail$: Observable<UserDetailDto | undefined> = this.store
  //   .select((s) => s.appAuth)
  //   .pipe(map((b) => b.userDetail));


  constructor(
    private httpClient: HttpClient,
    // private localStorageService: LocalStorageService,
    // private store: Store<AppState>
  ) { }

  // login(loginModel: LoginModel): Observable<SingleResponseModel<TokenModel>> {
  //   return this.httpClient.post<SingleResponseModel<TokenModel>>(
  //     `${this.apiControllerUrl}/login`,
  //     loginModel
  //   );
  // }

  // register(
  //   registerModel: RegisterModel
  // ): Observable<SingleResponseModel<TokenModel>> {
  //   return this.httpClient.post<SingleResponseModel<TokenModel>>(
  //     `${this.apiControllerUrl}/register`,
  //     registerModel
  //   );
  // }

  // logout() {
  //   this.localStorageService.remove('tokenModel');
  //   this.localStorageService.remove('userMail');
  //   this.deleteUserDetail();
  // }

  isAuthenticated(
    userMail?: string | null,
    requiredRoles?: string[]): Observable<ResponseModel> {
    let newPath = this.apiUrl + "isauthenticated";
    return this.httpClient.get<ResponseModel>(newPath);
  }

  // setUserDetail(userDetail: UserDetail) {
  //   this.store.dispatch(setUserDetail({ userDetail: userDetail }));
  // }

  // deleteUserDetail() {
  //   this.store.dispatch(deleteUserDetail());
  // }
  
}
 