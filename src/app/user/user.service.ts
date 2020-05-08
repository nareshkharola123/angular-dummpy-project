import { Injectable } from '@angular/core'

import { User } from './user.model'
import { userData } from './dummy-data.user';


@Injectable({ providedIn: 'root' })
export class UserService {

  userData = userData;


  constructor(){}

  createUser(email: string, userId: string, token: string, expirationDate: Date, userFormData?: User){
    let firstName: string;
    let lastName: string;
    let userName: string;
    let dateOfBirth: Date;
    let country: string;
    let mobile: number;
    let gender: string;

    if(userFormData){
      firstName = userFormData.firstName;
      lastName = userFormData.lastName;
      userName = userFormData.userName;
      dateOfBirth = userFormData.dateOfBirth;
      country = userFormData.country;
      mobile = userFormData.mobile;
      gender = userFormData.gender;
    }else{
      firstName = userData.firstName;
      lastName = userData.lastName;
      userName = userData.userName;
      dateOfBirth = new Date(userData.dateOfBirth);
      country = userData.country;
      mobile = userData.mobile;
      gender = userData.gender;
    }

    const user = new User(
      firstName,
      lastName,
      userName,
      email,
      dateOfBirth,
      country,
      mobile,
      gender,
      userId,
      token,
      expirationDate
    );
      return user
  }

}

