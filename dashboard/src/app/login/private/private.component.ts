import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'dev-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {

  constructor(
      private _authenticationService:AuthenticationService){}

  ngOnInit(){
    this._authenticationService.checkCredentials();
  }

  logout() {
    this._authenticationService.logout();
  }

}
