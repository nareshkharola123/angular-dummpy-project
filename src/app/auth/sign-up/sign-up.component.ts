import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from '../user.model';
import { CountriesName } from '../country-data';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  user: User;
  valueTab: number = 0;
  countryList: {}[] = new CountriesName().getCountryList(); 


  constructor() { }

  ngOnInit(): void {
    this.initForm();
    
  }

  private initForm(){
    console.log('initForm');
  
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
    console.log('I am submit');
    console.log(this.signUpForm.value)
  }

  onNext(){
    console.info('on Next click')
    this.valueTab += 1
  }

  onPrev(){
    console.info('onPrev click')
    this.valueTab -= 1
  }

}
