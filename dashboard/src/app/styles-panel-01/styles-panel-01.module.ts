import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StylesPanel01Component} from './styles-panel-01.component';
import {StylesPanel01Service} from './styles-panel-01.service';
import {RouterModule} from '@angular/router';
import {ROUTES} from './styles-panel-01.routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedFormattingModule} from '../shared/shared-formatting/shared-formatting.module';

@NgModule({
    providers: [
        StylesPanel01Service
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        ReactiveFormsModule,
        FormsModule,
        SharedFormattingModule
    ],
    declarations: [StylesPanel01Component]
})
export class StylesPanel01Module {

}
