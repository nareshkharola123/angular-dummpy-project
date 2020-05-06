import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit, OnDestroy {

  logInForm: FormGroup;
  logInWith: string;
  isError = false;
  messageError: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    let email: string;
    let username: string;
    let password: string;
    let logInType: string;

    this.logInForm = new FormGroup({
      'logInType': new FormControl(logInType, Validators.required),
      'userName': new FormControl(username),
      'email': new FormControl(email),
      'password': new FormControl(password, Validators.required)
    });

    this.logInForm.controls['logInType'].valueChanges.subscribe(value => {
      this.logInWith = value;
    })
  }

  onSubmit(){

    if(!this.logInForm.valid){
      return;
    }

    this.authService.loading.next(true);

    this.authService.logIn(
      this.logInForm.value.email,
      this.logInForm.value.username,
      this.logInForm.value.password
      )
      .subscribe(
        resData => {
          this.authService.loading.next(false);
          this.router.navigate(['/trends'])
          this.logInForm.reset();

        },
        resErr => {
          this.messageError = resErr.error.error.message;
          this.isError = true;
          this.authService.loading.next(false);
        }
      )

  }

  ngOnDestroy(){

  }

}
