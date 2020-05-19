import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { BlogService } from '../blog.service';
import { Blog } from '../blog.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit, OnDestroy {

  blogs: Blog[]
  unSub: Subscription
  constructor(
    private blogService: BlogService,
    private router: Router) { }

  ngOnInit(): void {

    this.unSub = this.blogService.blogsChanged.subscribe(blogs => {
      this.blogs = blogs
    }
    )
  }

  onSelect(id: number){
    this.router.navigate(['/trend',id])
  }

  ngOnDestroy(){
    this.unSub.unsubscribe();
  }

}
