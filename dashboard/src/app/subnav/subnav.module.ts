import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubnavComponent} from './subnav.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [SubnavComponent],
    exports: [SubnavComponent]
})
export class SubnavModule {
}
