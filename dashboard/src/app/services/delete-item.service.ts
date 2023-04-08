import { Injectable } from '@angular/core';
import {FormArray, NgForm} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class DeleteItemService {

  private confirm = false;
  private cancel = false;
  private deleteConfirmationArray: boolean[] = [];

  constructor() { }

/*  confirmDeleteMessage(i, el) {
    this.confirm = true;
    this.cancel = true;
    this.deleteConfirmationArray[i] = true;
  }*/

  /**
   * Delete form item
   * @param i
   * @param itemVal
   * @param status
   * @returns {boolean}
   */
/*  confirmDelete(i, itemVal, status) {
    if (status === 'deleteItem') {
      this.removeItem(i, itemVal);
      this.deleteConfirmationArray[i] = false;
    } else if (status === 'cancelDeleteItem') {
      this.deleteConfirmationArray[i] = false;
      return false
    }
  }*/

  /**
   * Remove items from the list
   * @param i
   * @param itemVal
   */
 /* removeItem(i: number, itemVal: NgForm) {
    const control = <FormArray>this.sectionDataForm.controls['items'];
    control.removeAt(i);
    // this.onSetSectionData();
  }*/

}
