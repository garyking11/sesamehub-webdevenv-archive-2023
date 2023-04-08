import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'dev-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public username: string;
  public password: string;
  public errorMsg = '';

  public get isLoggedIn(): boolean {
    return this._auth.isLoggedIn();
  }

  constructor(
      private _auth: AuthenticationService
  ) {}

  login() {
    this._auth.login(this.username, this.password).subscribe((loggedIn) => {
        if (!loggedIn) {
          this.errorMsg = 'Username or Password not found, please try again';
        }
    });
  }
}
