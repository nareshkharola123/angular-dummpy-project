import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';


@NgModule({
  declarations: [UserDetailComponent, UserEditComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UserModule { }
