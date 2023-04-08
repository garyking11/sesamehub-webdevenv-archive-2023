import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SupportComponent} from './support.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from '../support/support.routes';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {ResourcesModule} from '../resources/resources.module';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        MatTabsModule,
        MatExpansionModule,
        ResourcesModule
    ],
    declarations: [
        SupportComponent
    ]
})
export class SupportModule {
}
