import { BehaviorSubject } from 'rxjs';
import { Injectable, Inject } from '@angular/core';

import { Blog } from './blog.model';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ENDPOINTS_CONFIG } from '../configs/endpoints.config';

@Injectable({providedIn: 'root'})
export class BlogService {

    private blogs: Blog[] = [];
    blogsChanged = new BehaviorSubject<Blog[]>(null);

    constructor(
      private http: HttpClient,
      @Inject(ENDPOINTS_CONFIG) private blog_end_api: any
      ){}

    getBlogList(){
        return this.blogs.slice();
    }

    getBlogDetail(id: number){
        return this.blogs[id];
    }

    addBlog(blog: Blog){
      blog['date'] = new Date();
      this.blogs.push(blog);
      this.blogsChanged.next(this.blogs.slice());
      this.storeBlogs();
    }


    fetchBlogs(){
      return this.http
      .get<Blog[]>(this.blog_end_api.getBlogs)
      .pipe(
        tap(blogs => {
          this.setBlogs(blogs);
        })
      )

    }

    private storeBlogs(){
      const blogs = this.blogs;
      this.http
      .put(
         this.blog_end_api.putBlog,
        blogs
      )
      .subscribe(
        response => console.log('storeBLogs:',response)
      )
    }

    private setBlogs(blogs: Blog[]){
      this.blogs = blogs
      this.blogsChanged.next(this.blogs.slice());
    }


}
