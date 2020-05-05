import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Blog } from '../blog.model';
import { BlogService } from '../blog.service';


@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  blog: Blog;
  id: number;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) => {
        console.log(params)
        this.id = +params['id'];
        this.blog = this.blogService.getBlogDetail(this.id);
      }
    );
  }

}
