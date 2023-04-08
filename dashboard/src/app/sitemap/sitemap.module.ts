import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
// import {AccordionModule,} from "ngx-bootstrap";
import {SharedDataModule} from "../shared/shared-data/shared-data.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedFormattingModule} from "../shared/shared-formatting/shared-formatting.module";
import {SitemapService} from "./sitemap.service";
import {SitemapComponent} from "./sitemap.component";
import {CreateSitemapXmlService} from "../services/create-sitemapxml.service";
import {GetCurrentDomainUrlsService} from "../services/get-current-domain-urls.service";
import {DateService} from "../services/date.service";
import {IsLoadingService} from "../services/is-loading.service";
import {ROUTES} from "./sitemap.routes";
import {UtilitiesModule} from "../utilities/utilities.module";
import {MenuModule} from "../menu/menu.module";

@NgModule({
    providers: [
        SitemapService,
        CreateSitemapXmlService,
        DateService,
        GetCurrentDomainUrlsService,
        IsLoadingService
    ],
    imports: [
        // AccordionModule.forRoot(),
        CommonModule,
        FormsModule,
        MenuModule,
        ReactiveFormsModule,
        SharedFormattingModule,
        SharedDataModule,
        UtilitiesModule,
        RouterModule.forChild(ROUTES),
    ],
    declarations: [SitemapComponent],
    exports: [SitemapComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SitemapModule {
}
