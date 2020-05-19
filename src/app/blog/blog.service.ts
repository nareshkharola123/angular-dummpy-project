import { BehaviorSubject } from 'rxjs';

import { Blog } from './blog.model';
import { Injectable } from '@angular/core';
import { tap, take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class BlogService {

    private blogs: Blog[] = [];
    blogsChanged = new BehaviorSubject<Blog[]>(null);

    constructor(private http: HttpClient){}

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
      .get<Blog[]>('https://ng-recipe-book-project-f7f1e.firebaseio.com/blogs.json')
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
        'https://ng-recipe-book-project-f7f1e.firebaseio.com/blogs.json',
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
