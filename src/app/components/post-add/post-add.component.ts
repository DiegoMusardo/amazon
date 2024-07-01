import { Component } from '@angular/core';
import { PostDTO } from '../../models/post';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrl: './post-add.component.css'
})
export class PostAddComponent {
  // template driven forms
  model: PostDTO = new PostDTO();

  constructor(private bs: BlogService){}

  aggiungiPost(){
    this.bs.addPost(this.model);
  };

}
