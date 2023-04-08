import {NgModule} from "@angular/core";
import {CopyDataToClipboardService} from "../services/copy-to-clipboard.service";
import {CustomValidatorsService} from "../services/custom-validators.service";
import {SiteContextProviderService} from "../../dev-tools/site-context-provider/services/site-context-provider.service";
import {AdminService} from "../admin-dashboard/admin/admin.service";
import {CopyCssToLocalFileService} from "../services/copy-css-to-local-file.service";
import {ShowHideContentService} from "../services/show-hide-content.service";
import {UtilitiesService} from "../services/utilities.service";

@NgModule({
    providers: [
        AdminService,
        CopyCssToLocalFileService,
        CopyDataToClipboardService,
        CustomValidatorsService,
        ShowHideContentService,
        SiteContextProviderService,
        UtilitiesService
    ]
})
export class UtilitiesModule {}