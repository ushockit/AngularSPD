import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Lesson01';
  today = new Date();
  href = 'https://google.com';
  target = "_blank";
  isAuth: boolean = false;

  items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];



  onBtnClick(ev: any) {
    console.log(ev);
    //alert('Hello');
  }

  onChildBtnClick() {
    console.log('Click for child from parent');
  }

  onListItemClick(idx: number) {
    this.items.splice(idx, 1);
  }
}
