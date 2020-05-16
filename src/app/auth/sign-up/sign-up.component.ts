import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { User } from '../../user/user.model';
import { CountriesName, Country } from '../country-data';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  colorTheme = 'theme-dark-blue';  // datePicker theme
  bsConfig: Partial<BsDatepickerConfig>;

  signUpForm: FormGroup;
  user: User;
  valueTab: number = 0;
  countryList: Country[] = new CountriesName().getCountryList();
  isLoading = false;
  isError = false;
  messageError: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();

  }

  private initForm(){

    this.bsConfig = Object.assign(
      {},
      {
        containerClass: this.colorTheme,
        isAnimated: true,
        adaptivePosition: true,
        maxDate: new Date(2001, 12, 31),
      }
      );

    let firstName: string;
    let lastName: string;
    let userName: string;
    let email: string;

    let mobile: number;
    let gender: string;
    let country: string;
    let dateOfBirth: Date;
    let password: string

    this.signUpForm = new FormGroup({
      'firstName': new FormControl(firstName, [Validators.required, Validators.minLength(2)]),
      'lastName': new FormControl(lastName, Validators.minLength(2)),
      'userName': new FormControl(userName, [Validators.required, Validators.minLength(4)]),
      'email': new FormControl(email, [Validators.required, Validators.email]),

      'mobile': new FormControl(mobile, Validators.required),
      'gender': new FormControl(gender, Validators.required),
      'country': new FormControl(country, Validators.required),
      'dateOfBirth': new FormControl(dateOfBirth, Validators.required),
      'password': new FormControl(password, [Validators.required, Validators.minLength(6)])

    })
  }

  onSubmit(){

    if(!this.signUpForm.valid){
      return;
    }

    console.log(this.signUpForm.value);


    this.authService.loading.next(true);

    this.authService.signUp(this.signUpForm.value)
    .subscribe(
      (resData) => {
        this.authService.loading.next(false);
        this.router.navigate(['/trends']);
        this.signUpForm.reset();
      },
      (errData) => {
        this.isError = true;
        this.authService.loading.next(false);
        this.messageError = errData.error.error.message;
      }
    )

  }

  onNext(){
    this.valueTab += 1
  }

  onPrev(){
    this.valueTab -= 1
  }

}
