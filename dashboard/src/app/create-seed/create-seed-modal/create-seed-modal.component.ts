import {Component, OnInit, ViewChild} from '@angular/core';
import {SiteManagementService} from "../../../dev-tools/services/site-management.service";
// import {ModalDirective} from 'ngx-bootstrap/modal';
import {SiteContextProviderService} from "../../../dev-tools/site-context-provider/services/site-context-provider.service";

@Component({
    selector: 'dev-create-seed-modal',
    templateUrl: './create-seed-modal.component.html',
    styleUrls: ['./create-seed-modal.component.css']
})
export class CreateSeedModalComponent {

    // @ViewChild('autoShownModal', { static: false }) public autoShownModal: ModalDirective;

    constructor(private _siteManagementService: SiteManagementService,
                public _siteContextProviderService: SiteContextProviderService) {
    }

    private errorMessage: string;
    private buttonText: string;
    private popupBody: string;
    public isModalShown: boolean = false;
    public siteBuildKit: string;
    public alertType: string;
    public confirmButtonText: string;
    public deleteDuplicateBuildkit: boolean = false;
    public localDirectories;
    public isDuplicate;
    public backupStatus: boolean;

    /**
     * @param site
     * @param err
     * @param btntext
     * @param popupbody
     * @param alertType
     */
    public showModal(site, err, btntext, popupbody, alertType, confirmbuttontext): void {
        this.isModalShown = true;
        this.errorMessage = err;
        this.siteBuildKit = site;
        this.buttonText = btntext;
        this.popupBody = popupbody;
        this.alertType = alertType;
        this.confirmButtonText = confirmbuttontext;

        /**
         * Get local directories
         */
        this._siteContextProviderService.getLocalDirectories()
            .subscribe(
                data => {
                    this.localDirectories = data;

                    if (this.localDirectories.indexOf(this.siteBuildKit) > -1) {
                        this.isDuplicate = true;
                    }
                },
                error => console.log(error)
            );
    }

    public hideModal(): void {
        // this.autoShownModal.hide();
    }

    public onHidden(): void {
        this.isModalShown = false;
    }

    /**
     * Confirm creation of new buildkit
     * @param bool
     */
    public confirmCreate(bool) {
        if (bool) {
            this.hideModal();
            if (this.isDuplicate) {
                this._siteManagementService.deleteSiteDirectory(this.siteBuildKit).then((response) => {
                    this._siteManagementService.createSeed({siteSeed: this.siteBuildKit}).toPromise().then((response) => {
                        location.reload();
                    });
                });
            } else {
                console.log('false');
            }

        }
    }

    /**
     * Create zip and backup local buildkit to archives directory
     * @param accountname
     */
    public backupAccountBuildkit(accountname) {
        this._siteManagementService.backupBuildKit(accountname);
        this.backupStatus = true;

    }
}
