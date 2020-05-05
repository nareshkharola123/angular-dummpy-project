import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogAddComponent } from './blog-add/blog-add.component';
import { BlogComponent } from './blog.component';
import { AuthGuard } from '../auth/auth.guard';


const routes: Routes = [
        { path: 'trends', component: BlogComponent},
        { path: 'trend/:id', component: BlogDetailComponent },
        { path: 'trend-add', component: BlogAddComponent, canActivate: [AuthGuard] },
        { path: 'trend/:id/edit', component: BlogAddComponent, canActivate: [AuthGuard]},
    ]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule {

}
