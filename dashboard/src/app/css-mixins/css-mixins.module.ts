import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SubnavModule} from '../subnav/subnav.module';
import {CssMixinsComponent} from './css-mixins.component';
import {ROUTES} from './css-mixins.route';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        SubnavModule
    ],
    exports: [
        CssMixinsComponent
    ],
    declarations: [CssMixinsComponent]
})
export class CssMixinsModule {
}
