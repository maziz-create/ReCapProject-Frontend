import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private localStorageService: LocalStorageService,
    private router: Router
  ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let userMail: string | null = this.localStorageService.get<string>(
        'userMail'
      );
      //rol olarak adminin gönderildiğine dikkat.
      return this.authService.isAuthenticated(userMail, ['admin']).pipe(map((response) => {
          return response.success;
        }),
        catchError(() => {
          this.router.navigate(['']);
          this.toastrService.info('You are not authorized to access this page.');
          return of(false);
        })
      );
  }
}
