import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { CountriesName, Country } from 'src/app/auth/country-data';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers:[DatePipe]
})
export class UserEditComponent implements OnInit {
  colorTheme = 'theme-dark-blue';  // datePicker theme
  bsConfig: Partial<BsDatepickerConfig>;

  userForm: FormGroup;
  isLoading = false;
  isError = false;
  messageError: string;
  countryList: Country[] = new CountriesName().getCountryList();
  constructor(private userService: UserService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.formInit();
  }

  private formInit(){

    const user: User = this.userService.getUser();

    this.bsConfig = Object.assign(
      {},
      {
        containerClass: this.colorTheme,
        isAnimated: true,
        adaptivePosition: true,
        maxDate: new Date(2001, 12, 31),
      }
      );

    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', Validators.minLength(2)),
      userName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),

      mobile: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required)
    })

    this.userForm.patchValue({
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      email: user.email,
      mobile: user.mobile,
      gender: user.gender,
      country: user.country,
      dateOfBirth: new Date(user.dateOfBirth)
    })

  }

  onSubmit(){
    console.log(this.userForm.value)
  }

}
