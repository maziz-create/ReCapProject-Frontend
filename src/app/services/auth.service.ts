import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserDetailDto } from '../models/Dto/userDetailDto';
import { LoginModel } from '../models/Entity/loginModel';
import { RegisterModel } from '../models/Entity/registerModel';
import { TokenModel } from '../models/Entity/tokenModel';
import { ResponseModel } from '../models/ResponseModels/responseModel';
import { SingleResponseModel } from '../models/ResponseModels/singleResponseModel';
import { AppState } from '../store/app.reducer';
import { deleteUserDetail, setUserDetail } from '../store/auth/auth.actions';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "https://localhost:44354/api/auth/";

  //tam alttaki şeyi yapma amacımız değişen userDetaili view'e bildirmek, view'i render etmek.

  userDetail$: Observable<UserDetailDto | undefined> = this.store
    .select((s) => s.appAuth)
    .pipe(map((b) => b.userDetail));

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService,
    private store: Store<AppState>
  ) { }

  login(loginModel: LoginModel): Observable<SingleResponseModel<TokenModel>> {
    let newPath = this.apiUrl + "login";
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath, loginModel);
  }

  register(registerModel: RegisterModel): Observable<SingleResponseModel<TokenModel>> {
    let newPath = this.apiUrl + "register";
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath, registerModel);
  }

  logout() {
    this.localStorageService.remove('tokenModel');
    this.localStorageService.remove('userMail');
    this.deleteUserDetail();
  }

  isAuthenticated(userMail?: string | null, requiredRoles?: string[]): Observable<ResponseModel> {
    let newPath = this.apiUrl + "isauthenticated";
    return this.httpClient.get<ResponseModel>(newPath,
      {
        params:
          userMail && requiredRoles
            ? {
              userMail: userMail,
              requiredRoles: requiredRoles.join(','),
            }
            : {},
      }
    );
  }

  //for registering
  setUserDetail(userDetail: UserDetailDto) {
    this.store.dispatch(setUserDetail({ userDetail: userDetail }));
  }

  deleteUserDetail() {
    this.store.dispatch(deleteUserDetail());
  }

}
