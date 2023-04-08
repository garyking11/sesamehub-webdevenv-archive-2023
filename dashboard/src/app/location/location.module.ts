import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {SharedDataModule} from "../shared/shared-data/shared-data.module";
import {SharedFileManageModule} from "../shared/shared-file-manage/shared-file-manage.module";
import {SharedFormattingModule} from "../shared/shared-formatting/shared-formatting.module";
import {LocationComponent} from "./location.component";
import {LocationService} from "./location.service";
import {ROUTES} from "./location.routes";
import {UtilitiesModule} from "../utilities/utilities.module";
import {MenuModule} from "../menu/menu.module";
import {MatAccordion, MatExpansionModule} from "@angular/material/expansion";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatCardModule} from "@angular/material/card";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {IfFileExistsService} from "../services/if-file-exists.service";
import {ImageManagerCopyToLocalDirService} from "../image-manager/image-manager-copy-to-local-dir.service";
import {SnackbarService} from "../services/snackbar.service";
import {CdkAccordionModule} from "@angular/cdk/accordion";
import {ImageSelectorModule} from '../image-selector/image-selector.module';

@NgModule({
    providers: [
        LocationService,
        IfFileExistsService,
        ImageManagerCopyToLocalDirService,
        SnackbarService
    ],
    imports: [
        CommonModule,
        FormsModule,
        MenuModule,
        ReactiveFormsModule,
        SharedFormattingModule,
        SharedDataModule,
        SharedFileManageModule,
        UtilitiesModule,
        MatExpansionModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatSelectModule,
        MatInputModule,
        MatFormFieldModule,
        MatOptionModule,
        MatIconModule,
        DragDropModule,
        MatButtonModule,
        MatDividerModule,
        MatCardModule,
        MatSnackBarModule,
        CdkAccordionModule,
        ImageSelectorModule
    ],
    declarations: [
        LocationComponent
    ],
    exports: [
        LocationComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LocationModule {}
