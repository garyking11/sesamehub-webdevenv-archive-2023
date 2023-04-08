import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GetExtensionPipe} from "../../pipes/get-extension.pipe";

/* Manage extensions and other file related tasks */
@NgModule({

  imports: [
    CommonModule
  ],
  declarations: [GetExtensionPipe],
  exports: [GetExtensionPipe]
})
export class SharedFileManageModule {}
