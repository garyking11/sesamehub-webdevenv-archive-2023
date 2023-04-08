import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNavComponent } from "../admin-nav.component";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
    ],
  declarations: [AdminNavComponent],
  exports: [AdminNavComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AdminNavModule {}
