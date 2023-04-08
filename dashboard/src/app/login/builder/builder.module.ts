import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BuilderService} from "./builder.service";
import {BuilderComponent} from "./builder.component";
import {SharedDataModule} from "../../shared/shared-data/shared-data.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {GetHubNavigationModule} from "../../get-hub-navigation/get-hub-navigation.module";
import {CreateSeedModule} from "../../create-seed/create-seed.module";
import {MatExpansionModule} from "@angular/material/expansion";
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
import {ROUTES} from "../../login/builder/builder.routes";
import {SnackbarService} from "../../services/snackbar.service";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {ReplaceDashSpace} from "../../pipes/replace-dash-space";
import {SharedFormattingModule} from "../../shared/shared-formatting/shared-formatting.module";
import {AddSaveButtonsModule} from "../../partials/add-save-buttons/add-save-module";

@NgModule({
    providers: [
        BuilderService,
        SnackbarService,
        ReplaceDashSpace,
    ],
    declarations: [BuilderComponent],
    exports: [BuilderComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        SharedDataModule,
        SharedFormattingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        GetHubNavigationModule,
        CreateSeedModule,
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
        AddSaveButtonsModule,
    ]

})
export class BuilderModule {
}
