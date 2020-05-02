import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogAddComponent } from './blog-add/blog-add.component';
import { BlogComponent } from './blog.component';


const routes: Routes = [
        { path: 'trends', component: BlogComponent},
        { path: 'trend/:id', component: BlogDetailComponent },
        { path: 'trend/:id/add', component: BlogAddComponent },

    ]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule {

}
