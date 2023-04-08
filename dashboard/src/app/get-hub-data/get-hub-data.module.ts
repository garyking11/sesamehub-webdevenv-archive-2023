import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GetHubDataRoutingModule} from './get-hub-data-routing.module';
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
    imports: [
        CommonModule,
        GetHubDataRoutingModule,
        // MatSnackBarModule
    ],
    declarations: []
})
export class GetHubDataModule {
}
