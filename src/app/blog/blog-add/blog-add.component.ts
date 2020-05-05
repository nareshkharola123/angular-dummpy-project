import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { BlogService } from '../blog.service';


@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent implements OnInit {

  blogForm: FormGroup;
  fileURL: any;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {

    let title: string;
    let image: string;
    let description: string;


    this.blogForm = new FormGroup({
      'title': new FormControl(title, [Validators.required, Validators.minLength(2)]),
      'image': new FormControl(image, Validators.required),
      'description': new FormControl(description, [Validators.required, Validators.minLength(2)])
    })
  }

  onSubmit(){
    this.blogForm.value['image'] = this.fileURL;
    this.blogService.addBlog(this.blogForm.value);
    this.router.navigate(['trends']);
    this.blogForm.reset();
  }

  onFileChange(event: Event){
    const file = (event.target as HTMLInputElement).files[0]
    const fileReader = new  FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (_event) => {
      this.fileURL = fileReader.result
    }
  }


}
