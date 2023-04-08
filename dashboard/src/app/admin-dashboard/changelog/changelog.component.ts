import {Component, OnInit} from '@angular/core';
import {ChangelogInterface} from './changelog.interface';
import {FormBuilder} from '@angular/forms';
import {SnackbarService} from '../../services/snackbar.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {ChangelogService} from './changelog.service';

@Component({
    selector: 'changelog',
    templateUrl: './changelog.component.html',
    styleUrls: ['./changelog.component.css'],

})
export class ChangelogComponent implements OnInit {
    title = 'Changelog';
    public CLInterface?: ChangelogInterface;

    ngOnInit() {
        console.log('I am changelog');
        this.getChangeLogUpdates();
    }

    constructor(
        private _fb: FormBuilder,
        private _snackBarService: SnackbarService,
        private _changelogService: ChangelogService
    ) {}

    /**
     * Update name values when dropping and sorting
     * mat-expansion-panel drag and drop method
     * @param event
     */
    drop(event: CdkDragDrop<ChangelogInterface>) {
        if (!this.CLInterface) {
            return;
        }

        moveItemInArray((this.CLInterface.updates), event.previousIndex, event.currentIndex);
    }

    /**
     * Get office tour data
     */
    getChangeLogUpdates() {
        this._changelogService.getChangelogUpdates().subscribe({
            next: (CLInterface: ChangelogInterface) => {
                this.CLInterface = CLInterface;
                console.log(this.CLInterface);
            }
        })
    }

    /**
     * JSON data
     * @param MTTInterface
     */
     saveOfficeTourImages(CLInterface: ChangelogInterface) {

        let CLupdates = {
            updates: this.CLInterface.updates,
        }

        // this._officeTourService.sendOfficeTourImage(OTImages).subscribe();

        // this._snackBarService.openSnackBar('Your ' + this.imageDirectory + ' data has been saved!', '');
    }

    addUpdate() {
        this.CLInterface?.updates.push({
            name: 'update name',
            version: '',
            date: '',
            comments: ''
        })
    }

     removeUpdate(index: number) {
        this.CLInterface?.updates.splice(index, 1);
    }

}
