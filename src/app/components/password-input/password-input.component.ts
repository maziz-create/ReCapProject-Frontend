import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
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

/*
  Control Value Accessor özünde ne işimize yaradı? 
  Buz password-input component'i login-page componentte kullandık ve kullanım esnasinda haliyle formControlName=passoword kodunu yazdık. 
  Fakat hata verdi... Çünkü başka componentten geliyor ve erişimi yok. 
  Yani burada Control Value Accessor interface'inin methodlarını uygulayarak özünde bu işlevi yerine getiriyoruz.
*/
export class PasswordInputComponent implements OnInit, ControlValueAccessor {

  @Input() id: string = 'password-input';
  @Input() label: string = 'Enter your password';
  @Input() invalidFeedback: string = 'Please enter your password.';

  @Input() errors: any;
  @Input() touched: any;
  @Input() dirty: any;

  passwordHidden: boolean = true;

  value: string = ''; //this is the updated value that the class accesses
  onChange: any = () => { };
  onTouched: any = () => { };

  disabled = false;

  constructor() { }

  ngOnInit(): void {
  }

  //This will write the value to the view if the the value changes occur on the model programmatically
  writeValue(value: string/*this value is updated by programmatic changes*/): void {
    this.value = value;
  }

  //When the value in the UI is changed, this method will invoke a callback function
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  //When the element is touched, this method will get called
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  //--

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
