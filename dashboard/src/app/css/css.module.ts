import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ROUTES} from './css.route';
import {CssComponent} from './css.component';
import {SubnavModule} from '../subnav/subnav.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        SubnavModule
    ],
    declarations: [CssComponent],
    exports: [CssComponent]
})
export class CssModule {
}
