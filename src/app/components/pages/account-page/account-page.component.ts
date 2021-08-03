import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { UserDetailDto } from 'src/app/models/Dto/userDetailDto';
import { Findeks } from 'src/app/models/Entity/findeks';
import { UserDetailUpdateModel } from 'src/app/models/Entity/userDetailUpdateModel';
import { AuthService } from 'src/app/services/auth.service';
import { FindeksService } from 'src/app/services/findeks.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {

  accountForm!: FormGroup;
  userDetail$: Observable<UserDetailDto | undefined> = this.authService.userDetail$;
  userDetail?: UserDetailDto;
  findeks!: Findeks;
  currentPasswordHidden: boolean = true;
  newPasswordHidden: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private findeksService: FindeksService,
    private toastrService: ToastrService,
    private userService: UserService
  ) { }


  ngOnInit(): void {
    this.getUserDetailsFromStore();
  }

  getUserDetailsFromStore() {
    this.authService.userDetail$.pipe(first()).subscribe((userDetail) => {
      if (!userDetail) return; //auth state'te userDetail yoksa eğer fonksiyonu durdur.

      this.userDetail = userDetail; //auth state'ten aldığın userDetaili bizdekine yapıştır.
      this.createAccountFrom();
      this.getFindeksByCustomerId(userDetail.customerId);
    });
  }

  createAccountFrom() {
    this.accountForm = this.formBuilder.group({
      firstName: [this.userDetail?.firstName, Validators.required],
      lastName: [this.userDetail?.lastName, Validators.required],
      companyName: [this.userDetail?.companyName, Validators.required],
      nationalIdentity: [''],
      currentPassword: ['', Validators.required],
      newPassword: [''],
    });
  }

  getFindeksByCustomerId(customerId: number) {
    this.findeksService.getByCustomerId(customerId).subscribe((response) => {
      this.findeks = response.data;
      this.accountForm
        .get('nationalIdentity')
        ?.setValue(this.findeks.nationalIdentity);
    });
  }

  updateAccount() {
    if (!this.accountForm.valid) return;

    let userDetailUpdateModel: UserDetailUpdateModel = {
      ...this.userDetail,
      ...this.accountForm.value, //değiştirilmesi istenilen değerleri az öncekilerin üstüne yaz.
    };
    this.userService
      .updateUserDetails(userDetailUpdateModel)
      .subscribe((response) => {
        if (!this.userDetail) return;

        var newUserDetail: UserDetailDto = {
          ...this.userDetail,
          firstName: userDetailUpdateModel.firstName,
          lastName: userDetailUpdateModel.lastName,
          companyName: userDetailUpdateModel.companyName,
        };
        this.authService.setUserDetail(newUserDetail);
        this.toastrService.success("Kullanıcı bilgi güncelleme başarılı!");
        this.router.navigate(['']);
      });
  }

}
