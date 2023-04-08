import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesComponent} from './pages.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MenuModule} from "../menu/menu.module";
import {SharedFormattingModule} from "../shared/shared-formatting/shared-formatting.module";
import {SharedDataModule} from "../shared/shared-data/shared-data.module";
import {SharedFileManageModule} from "../shared/shared-file-manage/shared-file-manage.module";
import {UtilitiesModule} from "../utilities/utilities.module";
import {RouterModule} from "@angular/router";
import {ROUTES} from "../pages/pages.routes";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {AddSaveButtonsModule} from "../partials/add-save-buttons/add-save-module";
import {MatTabsModule} from "@angular/material/tabs";
import {BeforeAndAfterComponent} from "../before-and-after/before-and-after.component";
import {OfficeTourComponent} from "../office-tour/office-tour.component";
import {MeetTheTeamComponent} from "../meet-the-team/meet-the-team.component";
import {PatientFormsComponent} from "../patient-forms/patient-forms.component";
import {LocationComponent} from "../location/location.component";
import {BeforeAndAfterService} from "../before-and-after/before-and-after.service";
import {OfficeTourService} from "../office-tour/office-tour.service";
import {GetLocalImagesService} from "../services/get-local-images.service";
import {SnackbarService} from "../services/snackbar.service";
import {CdkAccordionModule} from "@angular/cdk/accordion";
import {MeetTheTeamService} from "../meet-the-team/meet-the-team.service";
import {PatientFormsService} from "../patient-forms/patient-forms.service";
import {LocationService} from "../location/location.service";
import {ImageManagerCopyToLocalDirService} from "../image-manager/image-manager-copy-to-local-dir.service";
import {MatCardModule} from "@angular/material/card";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {RemoveExtensionPipe} from '../pipes/remove-extension.pipe';
import {BeforeAndAfterModule} from '../before-and-after/before-and-after.module';
import {OfficeTourModule} from '../office-tour/office-tour.module';
import {MeetTheTeamModule} from '../meet-the-team/meet-the-team.module';
import {LocationModule} from '../location/location.module';

@NgModule({
    providers:[
        BeforeAndAfterService,
        OfficeTourService,
        MeetTheTeamService,
        PatientFormsService,
        GetLocalImagesService,
        LocationService,
        SnackbarService,
        ImageManagerCopyToLocalDirService
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
        MatTabsModule,
        CdkAccordionModule,
        MatSnackBarModule,
        // AddSaveButtonsModule,
        MatCardModule,
        DragDropModule,
        MatCheckboxModule,
        BeforeAndAfterModule,
        OfficeTourModule,
        MeetTheTeamModule,
        LocationModule
    ],
    declarations: [
        RemoveExtensionPipe,
        PagesComponent,
        PatientFormsComponent
    ],
})
export class PagesModule {
}
