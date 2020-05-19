import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { Blog } from './blog.model';
import { BlogService } from './blog.service';


@Injectable({providedIn: 'any'})
export class BlogsResolverService implements Resolve<Blog[]> {

  constructor(
    private blogService: BlogService,
  ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const blogs = this.blogService.getBlogList();

    if (blogs.length === 0){
      return this.blogService.fetchBlogs()
    }else{
      return blogs
    }
  }

}
