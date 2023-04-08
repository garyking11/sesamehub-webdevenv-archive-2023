import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrivateComponent} from "./private/private.component";
import {RouterModule} from "@angular/router";
// import {AccordionModule} from "ngx-bootstrap";
import {SharedFileManageModule} from "../shared/shared-file-manage/shared-file-manage.module";
import {SharedDataModule} from "../shared/shared-data/shared-data.module";
import {SharedFormattingModule} from "../shared/shared-formatting/shared-formatting.module";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule, FormsModule, FormBuilder} from "@angular/forms";
import {LoginComponent} from "./login.component";
import {AuthenticationService} from "./authentication.service";
import {SiteContextProviderService} from "../../dev-tools/site-context-provider/services/site-context-provider.service";
import {UserService} from "./user/user.service";
import {MenuModule} from "../menu/menu.module";
import { BuilderComponent } from './builder/builder.component';

@NgModule({
    providers: [
        AuthenticationService,
        UserService,
        SiteContextProviderService,
        FormBuilder
    ],
    imports: [
        // AccordionModule,
        CommonModule,
        FormsModule,
        MenuModule,
        ReactiveFormsModule,
        HttpClientModule,
        SharedFormattingModule,
        SharedDataModule,
        SharedFileManageModule,
        RouterModule,
    ],

    declarations: [LoginComponent, PrivateComponent],
    exports: [LoginComponent, PrivateComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule {
}
