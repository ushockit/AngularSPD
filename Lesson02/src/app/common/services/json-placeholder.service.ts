import {Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '@app-environment/environment';
import {Post} from "./interfaces/post.interface";
import {Observable} from "rxjs";

@Injectable()
export class JsonPlaceholderService {
  constructor(private readonly httpClient: HttpClient) {

  }

  getAllPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>([environment.API_URL, '/posts'].join(''));
  }

  getPostById(id: number): Observable<Post> {
    return this.httpClient.get<Post>([environment.API_URL, `/posts/${id}`].join(''));
  }
}
