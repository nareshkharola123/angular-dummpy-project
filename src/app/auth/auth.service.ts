import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject} from 'rxjs';
import { Injectable, Inject } from '@angular/core';

import { User } from '../user/user.model';
import { UserService } from '../user/user.service';
import { ENDPOINTS_CONFIG } from '../configs/endpoints.config';


export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService{

  user = new BehaviorSubject<User>(null);
  loading = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private userService: UserService,
    @Inject(ENDPOINTS_CONFIG) private auth_end_api: any){}

  signUp(data: User){
   const email = data.email;
   const password = data.password;

     return this.http.post<AuthResponseData>(
      this.auth_end_api.signUp,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    )
    .pipe(
        catchError(res => {
          return throwError(res)
        }),
        tap(
          resData => {
            this.handleAuthentication(email, resData.localId, resData.idToken, +resData.expiresIn, data);
          })
    );
  }

  logIn(email: string, userName: string, password: string){

    return this.http.post<AuthResponseData>(
      this.auth_end_api.logIn,
      {
        email: email,
        password: password,
        returnSecureToken: true
      })
      .pipe(
        catchError(res => {
          return throwError(res)
        }),
        tap(
          resData => {
            this.handleAuthentication(email,resData.localId, resData.idToken, +resData.expiresIn);
          })
    );

  }

  private handleAuthentication(email: string ,userId: string, token: string , expiresIn: number, data?: User){
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = this.userService.createUser(
      email,
      userId,
      token,
      expirationDate,
      data
    );

    this.user.next(user);
  }

}
