import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { AuthGuard } from '../auth/auth.guard';


const routes: Routes = [
        { path: 'user', component: UserDetailComponent, canActivate: [AuthGuard]},
        { path: 'user-edit', component: UserEditComponent, canActivate: [AuthGuard]}
    ]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {

}
