import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";
import {SharedDataModule} from "../shared/shared-data/shared-data.module";
import {SharedFileManageModule} from "../shared/shared-file-manage/shared-file-manage.module";
import {SharedFormattingModule} from "../shared/shared-formatting/shared-formatting.module";
import {OfficeTourComponent} from "./office-tour.component";
import {OfficeTourService} from "./office-tour.service";
import {UtilitiesModule} from "../utilities/utilities.module";
import {MenuModule} from "../menu/menu.module";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatDividerModule} from "@angular/material/divider";
import {MatCardModule} from "@angular/material/card";
import {CdkAccordionModule} from "@angular/cdk/accordion";
import {GetLocalImagesService} from "../services/get-local-images.service";
import {SnackbarService} from "../services/snackbar.service";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {ImageSelectorModule} from '../image-selector/image-selector.module';

@NgModule({
    providers: [
        OfficeTourService,
        GetLocalImagesService,
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
        CdkAccordionModule,
        MatSnackBarModule,
        ImageSelectorModule
    ],
    declarations: [
        OfficeTourComponent
    ],
    exports: [
        OfficeTourComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OfficeTourModule {}
