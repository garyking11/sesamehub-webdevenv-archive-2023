import {Injectable, ViewChild} from '@angular/core';
// import {ModalDirective} from "ngx-bootstrap";

@Injectable()
export class ModalPopupService {
  /*@ViewChild('autoShownModal') public autoShownModal:ModalDirective;

  private errorMessage: string;
  private buttonText: string;
  private popupBody: string;

  public isModalShown:boolean = false;

  public showModal(err, btntext, popupbody):void {
    this.isModalShown = true;
    this.errorMessage = err;
    this.buttonText = btntext;
    this.popupBody = popupbody;
  }

  public hideModal():void {
    this.autoShownModal.hide();
  }

  public onHidden():void {
    this.isModalShown = false;
  }*/

  public confirm(bool){
    if(bool){
      console.log('true');
    }
  }

}
