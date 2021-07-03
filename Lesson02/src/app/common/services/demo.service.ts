import {Injectable} from "@angular/core";

@Injectable()
export class DemoService {
  value: 10;


  demo() {
    return 'Hello world';
  }
}
