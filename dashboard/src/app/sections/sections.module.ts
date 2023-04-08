import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedDataModule} from '../shared/shared-data/shared-data.module';
import {SharedFileManageModule} from '../shared/shared-file-manage/shared-file-manage.module';
import {SharedFormattingModule} from '../shared/shared-formatting/shared-formatting.module';
import {SectionsComponent} from './sections.component';
import {SectionsService} from './sections.service';
import {ROUTES} from './sections.routes';
import {UtilitiesModule} from '../utilities/utilities.module';
import {MenuModule} from '../menu/menu.module';
import {SubnavModule} from '../subnav/subnav.module';
import {GetHubDataModule} from '../get-hub-data/get-hub-data.module';
import {GetHubDataComponent} from '../get-hub-data/get-hub-data.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatCardModule} from "@angular/material/card";
import {SnackbarService} from "../services/snackbar.service";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatListModule} from "@angular/material/list";
import {ResourcesComponent} from '../resources/resources.component';
import {ResourcesModule} from '../resources/resources.module';

@NgModule({
    providers: [
        SectionsService,
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
        SubnavModule,
        GetHubDataModule,
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
        MatListModule,
        ResourcesModule
    ],
    declarations: [
        SectionsComponent,
        GetHubDataComponent,
    ],
    exports: [SectionsComponent, GetHubDataComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SectionsModule {
}
