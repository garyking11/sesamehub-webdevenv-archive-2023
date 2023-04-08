import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormControl, Validators, NgForm} from '@angular/forms';
import {SiteManagementService} from '../../dev-tools/services/site-management.service';
import {SiteContextProviderService} from '../../dev-tools/site-context-provider/services/site-context-provider.service';

@Component({
    selector: 'dev-create-seed',
    templateUrl: './create-seed.component.html'
})

export class CreateSeedComponent implements OnInit {

    /**
     * Confirm create and overwrite
     */
    @ViewChild('confirmCreateSeed', { static: false }) ModalStatic;

    private createSiteSeedForm: FormGroup;
    public localDirectories;

    // preprocessors
    // preProcessorsArray = ['scss', 'less'];

    constructor(public _siteManagementService: SiteManagementService,
                public _siteContextProviderService: SiteContextProviderService) {
        // Create site seed form
        this.createSiteSeedForm = new FormGroup({
            'siteSeed': new FormControl('', Validators.required)
        });
    }

    ngOnInit() {
        this.onGetLocalDirectories();
    }

    /**
     *  Get already created site buildkit directories
     */
    onGetLocalDirectories() {
        this._siteContextProviderService.getLocalDirectories()
            .subscribe(
                data => {
                    this.localDirectories = data;
                },
                error => console.log(error)
            );
    }

    /**
     * Clone a psds-buildkit into local environment
     */
    onCreateSiteSeed(form: FormGroup) {
        let seedname: string = this.createSiteSeedForm.value; // Form values

        // Duplicate directory?
        let seed = form.value.siteSeed;

        if (this.localDirectories.indexOf(seed.value) > -1) {

            /**
             * @param site
             * @param err
             * @param btntext
             * @param popupbody
             * @param alertType
             */

            this.ModalStatic.showModal(
                seed,
                'Create site and delete old site directory?',
                'Cancel',
                'Re-creating this site is not undoable and will overwrite existing buildkit directory!  Make a backup if needed!',
                'confirm',
                'Replace ' + seed + ' buildkit!'
            );

            return;

        } else {

            // write to site-context-data.json
            this._siteManagementService.createSeed(seedname).subscribe(
                data => {
                },
                error => console.log(error)
            );

           location.reload();
        }
    }
}
