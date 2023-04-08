import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../login/authentication.service";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {FormArray} from "@angular/forms";
//import {AuthenticationService} from "../../login/authentication.service";
//import {AuthenticationService} from "../login/authentication.service";

@Component({
  selector: 'dev-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {
  public adminForm;
  constructor(
      private _authenticationService:AuthenticationService){}

  ngOnInit(){
    this._authenticationService.checkCredentials();
  }

  logout() {
    this._authenticationService.logout();
  }
  /**
   * Update name values when dropping and sorting
   * mat-expansion-panel drag and drop method
   * @param event
   */
  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray((<FormArray>this.adminForm.controls['items']).controls, event.previousIndex, event.currentIndex);
    this.adminForm.controls['items'].updateValueAndValidity();
  }



}
