import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {KeysPipe} from "../../pipes/keys.pipe";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [KeysPipe],
  exports: [KeysPipe]
})
export class SharedDataModule { }
