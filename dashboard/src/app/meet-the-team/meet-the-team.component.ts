import {Component, OnInit, Compiler} from '@angular/core';
import {MeetTheTeamInterface} from './meet-the-team.interface';
import {MeetTheTeamService} from './meet-the-team.service';
import {SiteContext} from '../../dev-tools/site-context-provider/site-context-provider.interface';
import {FormBuilder} from "@angular/forms";
import {SiteContextProviderService} from '../../dev-tools/site-context-provider/services/site-context-provider.service';
import {CopyDataToClipboardService} from '../services/copy-to-clipboard.service';
import {ShowHideContentService} from '../services/show-hide-content.service';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {IfFileExistsService} from "../services/if-file-exists.service";
import {GetLocalImagesService} from "../services/get-local-images.service";
import {SnackbarService} from "../services/snackbar.service";
import {ImageManagerCopyToLocalDirService} from '../image-manager/image-manager-copy-to-local-dir.service';
import {FileInfo, GetLocalFilesService} from '../services/get-local-files.service';

@Component({
    selector: 'dev-meet-the-team',
    templateUrl: './meet-the-team.component.html',
    styleUrls: ['./meet-the-team.component.css']
})
export class MeetTheTeamComponent implements OnInit {

    public title: string = "Meet the Team";
    public MTTInterface?: MeetTheTeamInterface;
    public siteContext?: SiteContext;
    private noImagesMessage: string;
    public selectedSliderImage?: string;
    public local_images: any[] = [];
    public imageDirectory?: string = 'uploads/images';
    public showOfficeTourInst: boolean;
    public localMeetTheTeamImages: FileInfo[] = [];
    public image: string;

    constructor(private _meetTheTeamService: MeetTheTeamService,
                private _siteContextProviderService: SiteContextProviderService,
                private _copyDataToClipboardService: CopyDataToClipboardService,
                private _imageManagerCopyToLocalDirService: ImageManagerCopyToLocalDirService,
                private _showHideContent: ShowHideContentService,
                private _listLocalFiles: IfFileExistsService,
                private _getLocalImagesService: GetLocalImagesService,
                private _fb: FormBuilder,
                private _snackBarService: SnackbarService,
                private _getLocalFilesService: GetLocalFilesService,
                private _compiler: Compiler) {}

    /**
     *
     * @type {{value: string; display: string}[]}
     */
    ngOnInit() {
        this.getSiteContext();
    }

    /**
     * Update name values when dropping and sorting
     * mat-expansion-panel drag and drop method
     * @param event
     */
    drop(event: CdkDragDrop<MeetTheTeamInterface>) {
        if (!this.MTTInterface) {
            return;
        }
        moveItemInArray((this.MTTInterface.members), event.previousIndex, event.currentIndex);
    }

    /**
     * Get account directory name on click event in site-context html
     * @returns {any}
     */
    getSiteContext() {
        this._siteContextProviderService.getCurrentContext().subscribe(
            res => {
                this.siteContext = res;
                this.getMeetTheTeamMembers(); // data
                this.getAccountImageFiles(); // images
                this.verifySiteContext(this.siteContext.account);
            },
            error => console.log(error)
        );
    }

    /**
     * Verify account name has been selected
     * @param siteContext.account
     */
    verifySiteContext(siteContext){
        if( !siteContext || siteContext == ''){
            this._snackBarService.openSnackBar('Please select an account name!', '');
        }
    }

    /**
     * Get account image files from assets/uploads/images
     * JSON data
     */
    getMeetTheTeamMembers() {
        this._meetTheTeamService.getMeetTheTeamMembers().subscribe(
            MTTInterface => {
                this.MTTInterface = MTTInterface;

                if (MTTInterface) {
                } else {
                    this.noImagesMessage = 'No images available';
                }
            },
            error => { console.log(error.message) }
        );
    }

    /**
     * JSON data
     * @param MTTInterface
     */
    saveMeetTheTeamMembers(MTTInterface: MeetTheTeamInterface){
        let siteContext = this.siteContext.account;
        let acctMembers = {
            account: siteContext,
            members: MTTInterface.members
        }

        this._meetTheTeamService.sendTheTeamMembers(acctMembers).subscribe();
        this._snackBarService.openSnackBar('Your \'meet the team\' data has been saved!', '');
    }

    /**
     * Get local office tour images - not data
     */
    getAccountImageFiles() {
        if (!this.siteContext) {
            return;
        }

        this._getLocalFilesService.listLocalFiles(this.siteContext.account, this.imageDirectory).subscribe(files => {
                this.localMeetTheTeamImages = files.filter(f => f.mime && f.mime.startsWith('image/'));

                if (!this.localMeetTheTeamImages) {
                    this._snackBarService.openSnackBar('Add ' + this.imageDirectory + ' images to assets/images/' + this.imageDirectory, '');
                }
            }, error => console.log(error)
        );
    }

    /**
     * Update image sizes on change
     * @param image
     */
    updateSize(image)
    {
        let imageInfo = this.localMeetTheTeamImages.find(i => i.path == image.image);

        if (imageInfo) {
            image.width = imageInfo.width;
            image.height = imageInfo.height;
        }
    }


    /**
     * Populate form field control name onInit
     * @param $event
     */
    sliderImagesChanged(e) {
        if (!this.siteContext) {
            return;
        }
        if (e.value) {
            this.selectedSliderImage = `../${this.siteContext.account}/assets/${this.imageDirectory}/${e.value}`;
            this._snackBarService.openSnackBar('You have updated meet the team image!', '');
        } else {
            this.selectedSliderImage = null;
        }
    }

    /**
     * Write updated form data to selected account /account/www/assets/includes/data/form-data-json
     * @param form
     */
    addMember() {
        this.MTTInterface?.members.push({
            name: '',
            position: '',
            bio: '',
            image: {},
            imageAlt: '',
            imageClass: ''
            })
    }

    removeMember(index: number) {
        this.MTTInterface?.members.splice(index, 1);
    }

    /**
     * Copy HTML/CSS markup to clipboard
     */
    copyHTMLToClipboard() {
        this._copyDataToClipboardService.copyHTMLDataToClipboard();
    }

    copyThisHTMLToClipboard(x:string) {
        this._copyDataToClipboardService.copyThisHTMLDataToClipboard(x);
    }

    copyCSSToClipboard() {
        this._copyDataToClipboardService.copyCSSDataToClipboard();
    }

    /**
     * Show hide content areas within forms
     * @param item
     */
    showHide(item) {
        this._showHideContent.showHideContent(item);
    }

}
