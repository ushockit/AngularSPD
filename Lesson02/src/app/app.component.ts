import {Component, Injector, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {JsonPlaceholderService} from "./common/services/json-placeholder.service";
import {Post} from "./common/services/interfaces/post.interface";
import {Observable} from "rxjs";
import {DemoService} from "./common/services/demo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges{
  title = 'Lesson02';
  form!: FormGroup;
  // post: Post[] = [];
  posts$: Observable<Post[]>;

  constructor(private readonly jsonPlaceholderService: JsonPlaceholderService) {
    // console.log(jsonPlaceholderService);
  }


  ngOnInit(): void {
    this.form = new FormGroup({
      "firstName": new FormControl('', Validators.required),
      "lastName": new FormControl('', Validators.required),
      "age": new FormControl(0, [Validators.required, Validators.min(0), Validators.max(100)])
    });
    // this.jsonPlaceholderService.getAllPosts().subscribe(post => {
    //   this.post = post;
    // });
    this.posts$ = this.jsonPlaceholderService.getAllPosts();
  }

  ngOnChanges(changes: SimpleChanges): void {

    console.log(changes);
  }

  onBtnClick() {
    if (this.form.valid) {
      const firstName = this.form.get('firstName')?.value;
      const lastName = this.form.get('lastName')?.value;
      const age = this.form.get('age')?.value;

      console.log('First name', firstName);
      console.log('Last name', lastName);
      console.log('Age', age);

      // динамическое изменения значения в input
      // this.form.get('firstName')?.patchValue('');
      // this.form.get('lastName')?.patchValue('');
      // this.form.get('age')?.patchValue(0);
      this.form.reset();
    }
  }
}
