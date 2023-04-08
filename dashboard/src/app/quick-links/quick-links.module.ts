import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {SharedDataModule} from "../shared/shared-data/shared-data.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedFormattingModule} from "../shared/shared-formatting/shared-formatting.module";
import {QuickLinksComponent} from "./quick-links.component";
import {UtilitiesModule} from "../utilities/utilities.module";

@NgModule({
    providers: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedDataModule,
        SharedFormattingModule,
        UtilitiesModule,
        RouterModule,
    ],
    declarations: [QuickLinksComponent],
    exports: [QuickLinksComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QuickLinksModule {}