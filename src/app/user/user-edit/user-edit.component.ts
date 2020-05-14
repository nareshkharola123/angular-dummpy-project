import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CountriesName, Country } from 'src/app/auth/country-data';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userForm: FormGroup;
  isLoading = false;
  isError = false;
  messageError: string;
  countryList: Country[] = new CountriesName().getCountryList();
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.formInit();
  }

  private formInit(){
    const user: User = this.userService.getUser();

    let firstName: string = user.firstName;
    let lastName: string  = user.lastName;
    let userName: string = user.userName;
    let email: string = user.email;

    let mobile: number = user.mobile;
    let gender: string = user.gender;
    let country: []
    let dateOfBirth: Date = user.dateOfBirth;

    this.userForm = new FormGroup({
      'firstName': new FormControl(firstName, [Validators.required, Validators.minLength(2)]),
      'lastName': new FormControl(lastName, Validators.minLength(2)),
      'userName': new FormControl(userName, [Validators.required, Validators.minLength(4)]),
      'email': new FormControl(email, [Validators.required, Validators.email]),

      'mobile': new FormControl(mobile, Validators.required),
      'gender': new FormControl(gender, Validators.required),
      'country': new FormControl(country, Validators.required),
      'dateOfBirth': new FormControl(dateOfBirth, Validators.required)
    })
  }

  onSubmit(){
    console.info('User Form Submit');
    console.log(this.userForm.value)
  }

}
