import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ROUTES} from './sliders.routes';
import {SharedDataModule} from '../shared/shared-data/shared-data.module';
import {SharedFileManageModule} from '../shared/shared-file-manage/shared-file-manage.module';
import {SharedFormattingModule} from '../shared/shared-formatting/shared-formatting.module';
import {UtilitiesModule} from '../utilities/utilities.module';
import {MenuModule} from '../menu/menu.module';
import {SlidersComponent} from "./sliders.component";
import {BeforeAndAfterComponent} from "../before-and-after/before-and-after.component";
import {OfficeTourComponent} from "../office-tour/office-tour.component";
import {BeforeAndAfterService} from "../before-and-after/before-and-after.service";
import {OfficeTourService} from "../office-tour/office-tour.service";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatExpansionModule} from "@angular/material/expansion";
import {GetLocalImagesService} from "../services/get-local-images.service";
import {SnackbarService} from "../services/snackbar.service";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {AddSaveButtonsModule} from "../partials/add-save-buttons/add-save-module";
import {MatTabsModule} from "@angular/material/tabs";
import {PatientFormsModule} from "../patient-forms/patient-forms.module";
import {MeetTheTeamModule} from "../meet-the-team/meet-the-team.module";


@NgModule({
    providers: [
        BeforeAndAfterService,
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
        RouterModule.forChild(ROUTES),
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatButtonModule,
        MatOptionModule,
        MatSelectModule,
        MatExpansionModule,
        MatSnackBarModule,
        AddSaveButtonsModule,
        MatTabsModule,
        PatientFormsModule,
        MeetTheTeamModule
    ],
    declarations: [
        SlidersComponent
    ],
    exports: [SlidersComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SlidersModule {
}
