import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserDetailDto } from 'src/app/models/Dto/userDetailDto';
import { CreditCard } from 'src/app/models/Entity/creditCard';
import { AuthService } from 'src/app/services/auth.service';
import { CreditCardService } from 'src/app/services/credit-card.service';

@Component({
  selector: 'app-wallet-page',
  templateUrl: './wallet-page.component.html',
  styleUrls: ['./wallet-page.component.css']
})
export class WalletPageComponent implements OnInit {

  // !: => şu an boş fakat dolduracağız.
  userDetail!: UserDetailDto;
  creditCards!: CreditCard[];
  dataLoaded: boolean = false;

  constructor(
    private authService: AuthService,
    private creditCardService: CreditCardService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.getUserDetailFromStore();
  }

  //AuthState'den getiriyor. Oraya zaten giriş yaparken bilgileri dispatcher ' e göndermiştik.
  getUserDetailFromStore() {
    this.authService.userDetail$.subscribe((userDetail) => {
      if (userDetail) {
        this.userDetail = userDetail;

        this.getAllCreditCards();
      }
    });
  }

  getAllCreditCards() {
    this.creditCardService
      .getAllByCustomerId(this.userDetail.customerId).subscribe((response) => {
        this.creditCards = response.data;
        this.dataLoaded = true;
      });
  }

  deleteCreditCard(creditCard: CreditCard) {
    if (confirm('Are you sure to delete credit card?')) {
      this.creditCardService.delete(creditCard).subscribe((response) => {
        this.toastrService.success("Kredi kartı başarıyla silindi.");
        //var olan creditCards listemizi güncellememiz gerekiyor. Burada da silinmesi için gönderilen kredi kartı haricindekileri listeye al diyoruz.
        this.creditCards = this.creditCards.filter(
          (c) => c.id !== creditCard.id
        );
      });
    }
  }

}
