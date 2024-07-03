import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post, PostDTO } from '../models/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>("https://localhost:3000/articoli");
  }

  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>("https://localhost:3000/articoli/" + id);
  }

  addPost(post: PostDTO){
    // console.log(post);
    // chiamata AJAX
    return this.http.post<Post[]>("https://localhost:3000/articoli", post);
  }
}
