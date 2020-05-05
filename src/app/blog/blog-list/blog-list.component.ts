import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BlogService } from '../blog.service';
import { Blog } from '../blog.model';


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogs: Blog[]

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.blogs = this.blogService.getBlogList();
  }

  onSelect(id: number){
    this.router.navigate(['/trend',id])
  }

}
