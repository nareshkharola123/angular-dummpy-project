// builtin module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';

// custom module
import { AuthRoutingModule } from './auth-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './auth.component';



@NgModule({
  declarations: [AuthComponent, SignUpComponent, LogInComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxLoadingModule.forRoot({
        animationType: ngxLoadingAnimationTypes.threeBounce,
        backdropBackgroundColour: 'rgba(0,0,0,0.1)',
        backdropBorderRadius: '10px',
        primaryColour: '#ffffff',
        secondaryColour: '#ffffff',
        tertiaryColour: '#ffffff'
    }),

    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
