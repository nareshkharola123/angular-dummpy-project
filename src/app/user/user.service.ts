import { Injectable } from '@angular/core'

import { User } from './user.model'
import { userData } from './dummy-data.user';


@Injectable({ providedIn: 'root' })
export class UserService {

  private userData = userData;
  private user: User;


  constructor(){}

  createUser(email: string, userId: string, token: string, expirationDate: Date, userObjectData?: User){
    let firstName: string;
    let lastName: string;
    let userName: string;
    let dateOfBirth: Date;
    let country: string;
    let mobile: number;
    let gender: string;

    if(userObjectData){
      firstName = userObjectData.firstName;
      lastName = userObjectData.lastName;
      userName = userObjectData.userName;
      dateOfBirth = userObjectData.dateOfBirth;
      country = userObjectData.country;
      mobile = userObjectData.mobile;
      gender = userObjectData.gender;
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
    this.user = user
      return user
  }

  getUser(){
    return this.user
  }

}

