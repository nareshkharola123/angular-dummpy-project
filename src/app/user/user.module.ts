import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
    declarations: [UserDetailComponent, UserEditComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        UserRoutingModule,
        BsDatepickerModule.forRoot(),
    ]
})
export class UserModule { }
