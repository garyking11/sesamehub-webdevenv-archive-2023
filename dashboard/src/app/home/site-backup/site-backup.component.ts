import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {SiteManagementService} from '../../../dev-tools/services/site-management.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-site-backup',
    templateUrl: './site-backup.component.html'
})
export class SiteBackupComponent implements OnInit {

    @Input('site')
    site: string;
    @Input()
    showDeletedSpinner: boolean;

    @Output()
    deleted = new EventEmitter<void>();

    public showSpinner: boolean = false;
    public hasBackup: boolean = false;

    constructor(private siteManagementService: SiteManagementService) {}

    ngOnInit() {
        this.checkBackup();
    }

    deleteSite() {
        this.siteManagementService.deleteSiteDirectory(this.site).then(val => {
            if (val.status = 200) {
                this.showDeletedSpinner = true;
                location.reload();
            } else {
                this.showDeletedSpinner = false;
            }
        });
    }

    checkBackup() {
        this.siteManagementService.backupFilesExist()
            .subscribe((data: string[]) => {
                this.hasBackup = data.filter(value => {
                        return value === this.site + '.zip';
                    // return value === this.site.split('.').pop().replace('.zip', '');
                    }).length > 0;
            }, err => {
                console.error(err);
            });
    }

    backup(): Promise<void> {
        this.showSpinner = true;
        return new Promise((resolve, reject) => {
            this.siteManagementService.backupBuildKit(this.site)
                .then(() => {
                    this.showSpinner = false;
                    this.checkBackup();
                    return resolve();
                })
                .catch(err => {
                    this.showSpinner = false;
                    // Uh-oh, something bad happened.
                    return reject(err);
                });
        });
    }
}
