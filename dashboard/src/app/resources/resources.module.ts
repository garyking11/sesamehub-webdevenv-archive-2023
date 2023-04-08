import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {ResourcesComponent} from './resources.component';
import {MatExpansionModule} from '@angular/material/expansion';



@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatExpansionModule,
  ],
  declarations: [ResourcesComponent],
  exports: [ResourcesComponent]
})
export class ResourcesModule { }
