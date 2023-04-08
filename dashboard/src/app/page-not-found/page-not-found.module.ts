import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {SharedFormattingModule} from "../shared/shared-formatting/shared-formatting.module";
import {PageNotFoundComponent} from "./page-not-found.component";
import {ROUTES} from "./page-not-found.routes";
import {UtilitiesModule} from "../utilities/utilities.module";

@NgModule({
    providers: [],
    imports: [
        CommonModule,
        SharedFormattingModule,
        UtilitiesModule,
        RouterModule.forChild(ROUTES),
    ],
    declarations: [PageNotFoundComponent],
    exports: [PageNotFoundComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PageNotFoundModule {}