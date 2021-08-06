import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';
import { TokenModel } from '../models/Entity/tokenModel';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private localStorageService: LocalStorageService) { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let tokenModel: TokenModel | null = this.localStorageService.get<TokenModel>('tokenModel');

    let newRequest: HttpRequest<any> = request.clone({
      headers: request.headers.set(
        'Authorization',
        `Bearer ${tokenModel?.token}`
      ),
    });
    
    return next.handle(newRequest);
  }
}
