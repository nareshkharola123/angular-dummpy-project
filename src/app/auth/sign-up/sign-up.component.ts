import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../user/user.model';
import { CountriesName, Country } from '../country-data';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

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

    this.authService.signUp(this.signUpForm.value)
    .subscribe(
      (resData) => {
        this.router.navigate(['/trends']);
        this.signUpForm.reset();
      },
      (errData) => {
        this.isError = true;
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