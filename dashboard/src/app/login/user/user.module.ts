import {NgModule} from "@angular/core";
import {ROUTES} from "./user.routes";
import {RouterModule} from "@angular/router";
import {UserComponent} from "./user.component";
import {UserService} from "./user.service";
import {SiteContextProviderService} from "../../../dev-tools/site-context-provider/services/site-context-provider.service";
import {AuthenticationService} from "../authentication.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AdminNavModule} from "../../admin-dashboard/admin-nav/admin-nav/admin-nav.module";
import {KeysPipe} from '../../pipes/keys.pipe';
import {SortPipe} from '../../pipes/sort.pipe';
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {SharedFormattingModule} from "../../shared/shared-formatting/shared-formatting.module";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
    providers: [
        UserService,
        SiteContextProviderService,
        AuthenticationService,
        KeysPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        AdminNavModule,
        MatButtonModule,
        MatExpansionModule,
        MatIconModule,
        MatInputModule,
        DragDropModule,
        SharedFormattingModule,
        MatSelectModule
    ],
    declarations: [
        UserComponent,
        SortPipe
    ],
    exports: [
        UserComponent
    ]
})
export class UserModule {
}
