import {Injectable} from "@angular/core";
import {LocalStorageService} from "./local-storage.service";

@Injectable()
export class AuthService {
  isLoggedIn = true;
  constructor(private localStorageService: LocalStorageService) {
  }
}
