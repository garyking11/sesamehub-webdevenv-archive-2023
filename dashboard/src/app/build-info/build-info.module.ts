import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
// import {AccordionModule} from "ngx-bootstrap";
import {SharedDataModule} from "../shared/shared-data/shared-data.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedFormattingModule} from "../shared/shared-formatting/shared-formatting.module";
import {BuildInfoComponent} from "./build-info.component";
import {AdminService} from "../admin-dashboard/admin/admin.service";
import {CopyDataToClipboardService} from "../services/copy-to-clipboard.service";
import {ROUTES} from "./build-info.routes";
import {MenuModule} from "../menu/menu.module";
import {SubnavModule} from '../subnav/subnav.module';

@NgModule({
    providers: [CopyDataToClipboardService, AdminService ],
    imports: [
        CommonModule,
        FormsModule,
        MenuModule,
        ReactiveFormsModule,
        SharedDataModule,
        SharedFormattingModule,
        SubnavModule,
        RouterModule.forChild(ROUTES),
    ],
    declarations: [BuildInfoComponent],
    exports: [BuildInfoComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BuildInfoModule {}
