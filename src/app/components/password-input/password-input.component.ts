/*
  Control Value Accessor özünde ne işimize yaradı? 
  Buz password-input component'i login-page componentte kullandık ve kullanım esnasinda haliyle formControlName=passoword kodunu yazdık. 
  Fakat hata verdi... Çünkü başka componentten geliyor ve erişimi yok. 
  Yani burada Control Value Accessor interface'inin methodlarını uygulayarak özünde bu işlevi yerine getiriyoruz.
*/

/*
  Çok önemli genel bir not:
  Angular dökümantasyonunda Control Value Accessor kısmında başlangıçta interface olduğunu söyleyip şu şekilde devam edilmiş =>
  --
  interface ControlValueAccessor {
  writeValue(obj: any): void
  registerOnChange(fn: any): void
  registerOnTouched(fn: any): void
  setDisabledState(isDisabled: boolean)?: void
  --
  Bunun manası şudur. Bu bir interface olduğu için haliyle onun methodlarını implemente etmek zorundasın. 
  Ama hepsini etmek zorunda değilsin. 4 seçeneğin 3ünde : void derken
  en sonuncusunda yani setDisabledState ' de ?: void ifadesi yer almakta. 
  Yani ilk 3 method void döndürmesi gerekiyorken yani implemente etmen şart iken sonuncusunda şart değil...
}
*/

import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      //ng value accessor'u kimin için kullanacağız ? => passwordInputComponent
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true,
    },
  ],
  host: {
    '(change)': 'onChange($event.target.value)',
    '(input)': 'onChange($event.target.value)',
    '(blur)': 'onTouched()',
  },
})

export class PasswordInputComponent implements OnInit, ControlValueAccessor {

  @Input() id: string = 'password-input';
  @Input() label: string = 'Enter your password';
  @Input() invalidFeedback: string = 'Please enter your password.';

  //input tanımlama amacı yukarıdan(login-page component) gelecek olan errors, touched ve dirty'i kendi html'imde kullanmak.
  @Input() errors: any;
  @Input() touched: any;
  @Input() dirty: any;

  passwordHidden: boolean = true;

  value: string = ''; //this is the updated value that the class accesses,, bize dışarıdan gelen güncellenmiş value'nin atanacağı, password-inputta yarattığımız kopya değişken.
  onChange: any = () => { };
  onTouched: any = () => { };

  disabled = false;

  constructor() { }

  ngOnInit(): void {
  }

  //This will write the value to the view if the the value changes occur on the model programmatically
  //türkçesi => kullanıcının input ettiği veriyi alıp parente gönderilecek ya hani, bu işte o değişen şeyi yakalayan adam.
  writeValue(value: string): void {/*this value is updated by programmatic changes*/
    this.value = value;
  }

  //When the value in the UI is changed, this method will invoke a callback function
  //başka bir kaynak => formun yenilenmesi gerektiğinde  bu fonksiyon çağırılır diyor.
  //türkçesi => değişen şeyi parent'a bildiren adam bu.
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  //When the element is touched, this method will get called
  //kullanıcı dokunduğu zaman bunu parent'a bildirecek adam bu.
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  //formun disabled/enabled durumlarını parent'a bildiren
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
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

}
