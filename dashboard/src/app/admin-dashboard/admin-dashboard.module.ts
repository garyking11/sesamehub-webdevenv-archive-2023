import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';
import {RouterModule} from "@angular/router";
import {AdminDashboardRoutes} from "./admin-dashboard.routes";
import {AdminService} from "./admin/admin.service";
import {SharedFormattingModule} from "../shared/shared-formatting/shared-formatting.module";
import {CommonModule} from "@angular/common";
import {SharedDataModule} from "../shared/shared-data/shared-data.module";
import {SharedFileManageModule} from "../shared/shared-file-manage/shared-file-manage.module";
import {AdminNavModule} from "./admin-nav/admin-nav/admin-nav.module";
import {AdminModule} from "./admin/admin/admin.module";
import {AuthModule} from "../login/auth.module";
import {HttpClientModule} from "@angular/common/http";
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
import {CdkAccordionModule} from "@angular/cdk/accordion";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {ChangelogModule} from './changelog/changelog.module';
import {ChangelogComponent} from './changelog/changelog.component';



@NgModule({
    providers: [
        AdminService,
    ],
    imports: [
        AdminModule,
        AdminNavModule,
        AuthModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SharedFormattingModule,
        SharedDataModule,
        SharedFileManageModule,
        RouterModule.forChild(AdminDashboardRoutes),
        MatExpansionModule,
        MatCheckboxModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatOptionModule,
        MatIconModule,
        DragDropModule,
        MatButtonModule,
        MatDividerModule,
        MatCardModule,
        CdkAccordionModule,
        MatSnackBarModule

    ],
    declarations: [],
    exports: [],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AdminDashboardModule {
}
