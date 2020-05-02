import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { BlogService } from '../blog.service';
import { Blog } from '../blog.model';


@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent implements OnInit {

  blogForm: FormGroup;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {

    let image: string;
    let description: string;

    this.blogForm = new FormGroup({
      'image': new FormControl(image, Validators.required),
      'description': new FormControl(description, [Validators.required, Validators.minLength(2)])
    })
  }

  onSubmit(){
    console.info(this.blogForm.value);
    this.blogService.addBlog(this.blogForm.value);
  }

}
