import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(params => {
      console.log(params.id);
    });
  }
}
