import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogAddComponent } from './blog-add/blog-add.component';
import { BlogComponent } from './blog.component';
import { BlogService } from './blog.service';



@NgModule({
  declarations: [
    BlogComponent,
    BlogListComponent,
    BlogDetailComponent, 
    BlogAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BlogRoutingModule,
    SharedModule,
  ],
  providers: [
    BlogService
  ]
})
export class BlogModule { }
