import {NgModule, CUSTOM_ELEMENTS_SCHEMA, Compiler} from "@angular/core";
import {FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import {CommonModule} from "@angular/common";
import {SharedDataModule} from "../shared/shared-data/shared-data.module";
import {SharedFileManageModule} from "../shared/shared-file-manage/shared-file-manage.module";
import {SharedFormattingModule} from "../shared/shared-formatting/shared-formatting.module";
import {BeforeAndAfterComponent} from "./before-and-after.component";
import {BeforeAndAfterService} from "./before-and-after.service";
import {SiteContextProviderService} from "../../dev-tools/site-context-provider/services/site-context-provider.service";
import {CopyDataToClipboardService} from "../services/copy-to-clipboard.service";
import {CustomValidatorsService} from "../services/custom-validators.service";
import {UtilitiesModule} from "../utilities/utilities.module";
import {MenuModule} from "../menu/menu.module";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {GetLocalImagesService} from "../services/get-local-images.service";
import {OfficeTourService} from "../office-tour/office-tour.service";
import {MatExpansionModule} from "@angular/material/expansion";
import {SnackbarService} from "../services/snackbar.service";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ImageSelectorModule} from '../image-selector/image-selector.module';


@NgModule({
    providers: [
        BeforeAndAfterService,
        OfficeTourService,
        SiteContextProviderService,
        CopyDataToClipboardService,
        CustomValidatorsService,
        FormBuilder,
        GetLocalImagesService,
        OfficeTourService,
        SnackbarService,
        Compiler
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
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatButtonModule,
        MatOptionModule,
        MatSelectModule,
        MatExpansionModule,
        MatSnackBarModule,
        DragDropModule,
        ImageSelectorModule
    ],
    declarations: [
        BeforeAndAfterComponent
  ],
    // , OfficeTourComponent
    exports: [
        BeforeAndAfterComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BeforeAndAfterModule {}
