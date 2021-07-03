import {Component, Input} from '@angular/core';
import {Post} from "../../common/services/interfaces/post.interface";
import {JsonPlaceholderService} from "../../common/services/json-placeholder.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post: Post;


  constructor(private readonly jsonPlaceholderService: JsonPlaceholderService) {
  }

  onPostClick() {
    this.jsonPlaceholderService.getPostById(this.post.id).subscribe(result => {
      console.log(result);
    });
  }
}
