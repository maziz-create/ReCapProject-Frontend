import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { LocalStorageService } from './services/local-storage.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReCap';
  user: string = 'Mehmet Aziz Algüllü';

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.getUserDetailByEmailFromLocalStorage();
  }

  getUserDetailByEmailFromLocalStorage() {
    let userMail: string | null = this.localStorageService.get<string>('userMail');
    if (!userMail) return;

    this.getUserDetailByEmail(userMail);
  }

  getUserDetailByEmail(mail: string) {
    this.userService
      .getUserDetailByEmail(mail)
      .subscribe((response) => this.authService.setUserDetail(response.data));
  }
}