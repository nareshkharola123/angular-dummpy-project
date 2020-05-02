import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit, OnDestroy {

  logInForm: FormGroup;
  logInWith: string;

  constructor() { }

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
    console.info('submit click')
    console.log(this.logInForm.value);
    
  }
  
  ngOnDestroy(){
    
  }

}
