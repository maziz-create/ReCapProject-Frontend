import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterModel } from 'src/app/models/Entity/registerModel';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  registerForm!: FormGroup;
  isLogin: boolean = false;

  passwordHidden: boolean = true; //ilk değeri

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private toastrService: ToastrService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.createRegisterForm();
    this.isLoginControl();
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  register() {
    if (!this.registerForm.valid) return; //buradaki sade return => bitir fonksiyonu demek. inme aşağı
    console.log("valid olunma durumu => ",this.registerForm.valid)
    let registerModel: RegisterModel = { ...this.registerForm.value };
    this.authService.register(registerModel).subscribe((response) => {
      console.log("kayıt olacak olan kişi => ", this.registerForm.value);
      this.localStorageService.set('tokenModel', response.data);
      this.localStorageService.set('userMail', this.registerForm.get('email')?.value);
      this.getUserDetailByEmail(this.registerForm.get('email')?.value);
      this.router.navigate(['']);
      this.toastrService.info("Kayıt başarıyla tamamlandı!");
    });
  }

  getUserDetailByEmail(mail: string) {
    this.userService.getUserDetailByEmail(mail).subscribe((response) => {
      this.authService.setUserDetail(response.data);
    });
  }

  togglePasswordHidden() {
    this.passwordHidden = !this.passwordHidden;
  }

  isPasswordHidden(): string {
    return this.passwordHidden ? 'password' : 'text';
  }

  isPasswordHiddenIcon(): string {
    return this.passwordHidden ? 'fa-eye-slash' : 'fa-eye text-primary';
  }

  isLoginControl(): void {
    this.isLogin = this.localStorageService.get<string>('userMail') ? true : false;
  }

}
