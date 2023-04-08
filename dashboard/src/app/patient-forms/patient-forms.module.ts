import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {SharedDataModule} from "../shared/shared-data/shared-data.module";
import {SharedFileManageModule} from "../shared/shared-file-manage/shared-file-manage.module";
import {SharedFormattingModule} from "../shared/shared-formatting/shared-formatting.module";
import {PatientFormsComponent} from "./patient-forms.component";
import {PatientFormsService} from "./patient-forms.service";
import {ROUTES} from "./patient-forms.routes";
import {UtilitiesModule} from "../utilities/utilities.module";
import {MenuModule} from "../menu/menu.module";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from "@angular/material/divider";
import {MatCardModule} from "@angular/material/card";
import {CdkAccordionModule} from "@angular/cdk/accordion";
import {SnackbarService} from "../services/snackbar.service";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {AddSaveButtonsModule} from "../partials/add-save-buttons/add-save-module";

@NgModule({
    providers: [
        PatientFormsService,
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
        RouterModule.forChild(ROUTES),
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
        AddSaveButtonsModule
    ],
    declarations: [PatientFormsComponent],
    exports: [PatientFormsComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PatientFormsModule {}
