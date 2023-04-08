import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {SharedDataModule} from "../shared/shared-data/shared-data.module";
import {SharedFormattingModule} from "../shared/shared-formatting/shared-formatting.module";
import {CanadianContentComponent} from "./canadian-content.component";
import {CanadianContentService} from "./canadian-content.service";
import {ROUTES} from "./canadian-content.routes";
import {UtilitiesModule} from "../utilities/utilities.module";
// import {AccordionModule} from "ngx-bootstrap";
import {MenuModule} from "../menu/menu.module";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
    providers: [
        CanadianContentService,
    ],
    imports: [
        // AccordionModule.forRoot(),
        CommonModule,
        MenuModule,
        SharedDataModule,
        SharedFormattingModule,
        UtilitiesModule,
        RouterModule.forChild(ROUTES),
        MatExpansionModule,
        MatIconModule
    ],
    declarations: [CanadianContentComponent],
    exports: [CanadianContentComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CanadianContentModule {}
