import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() title: string = '';
  @Output() btnClickEvent = new EventEmitter();
  @Input() items: string[] = [];

  obBtnClick() {
    console.log('Click from child');
    this.btnClickEvent.emit();

    this.title = 'Hello';
  }
}
