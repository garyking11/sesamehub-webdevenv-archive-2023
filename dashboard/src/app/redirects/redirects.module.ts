import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {SharedDataModule} from "../shared/shared-data/shared-data.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedFormattingModule} from "../shared/shared-formatting/shared-formatting.module";
import {RedirectsComponent} from "./redirects.component";
import {RedirectsService} from "./redirects.service";
import {DataService} from "../services/data.service";
import {ROUTES} from "./redirects.routes";
import {UtilitiesModule} from "../utilities/utilities.module";
import {IsLoadingService} from "../services/is-loading.service";
import {MenuModule} from "../menu/menu.module";
import {ReplaceHashPipe} from "../pipes/remove-hash.pipe";

@NgModule({
    providers: [
        RedirectsService,
        DataService,
        IsLoadingService,

    ],
    imports: [
        CommonModule,
        FormsModule,
        MenuModule,
        ReactiveFormsModule,
        SharedDataModule,
        SharedFormattingModule,
        UtilitiesModule,
        RouterModule.forChild(ROUTES),
    ],
    declarations: [RedirectsComponent, ReplaceHashPipe],
    exports: [RedirectsComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RedirectsModule {}