import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { UserDetailDto } from 'src/app/models/Dto/userDetailDto';
import { Findeks } from 'src/app/models/Entity/findeks';
import { User } from 'src/app/models/Entity/user';
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
  userDetail$: Observable<User | undefined> = this.authService.userDetail$;
  userDetail: UserDetailDto;

  customerId: number;

  newUser: User;

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
    // this.getUserDetailDtoByUserId(this.userDetail$.);
  }

  getUserDetailsFromStore() {
    this.authService.userDetail$.pipe(first()).subscribe((userDetail) => {
      console.log("gelen user=>", userDetail);
      if (!userDetail) return; //auth state'te userDetail yoksa eğer fonksiyonu durdur.
      //auth state'ten aldığın userDetaili bizdekine yapıştır.

      this.getUserDetailDtoByUserId(userDetail.id);
      this.createAccountFrom();
      this.getFindeksByUserId(userDetail.id);
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

  getFindeksByUserId(userId: number) {
    this.findeksService.getByUserId(userId).subscribe((response) => {
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
        this.getUserDetailByEmail(newUserDetail.email);
        this.authService.setUserDetail(this.newUser);
        this.toastrService.success("Kullanıcı bilgileri güncellendi.");
        this.router.navigate(['']);
      });
  }

  //user döndürür
  getUserDetailByEmail(email: string) {
    this.userService.getUserDetailByEmail(email).subscribe((response) => {
      this.newUser = response.data;
    })
  }

  //userdetail döndürür
  getUserDetailDtoByUserId(userId: number) {
    this.userService.getUserDetailDtoByUserId(userId).subscribe((response) => {
      this.userDetail = response.data;
      this.customerId = response.data.customerId;
    })
  }
}