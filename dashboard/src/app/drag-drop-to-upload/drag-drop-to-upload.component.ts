    import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {DragDropToUploadService} from './drag-drop-to-upload.service';
import {SiteContextProviderService} from '../../dev-tools/site-context-provider';
import {SiteContext} from '../../dev-tools/site-context-provider/site-context-provider.interface';
import {DragDropToUploadInterface} from './drag-drop-to-upload.interface';
import {SnackbarService} from '../services/snackbar.service';
import {ImageManagerCopyToLocalDirService} from '../image-manager/image-manager-copy-to-local-dir.service';

interface Images {
    "images/before-after-cycle": string[],
    "images/office-tour": string[],
    "images/slideshow": string[],
    "images/spotlight": string[],
    "uploads/images": string[]
}

@Component({
    selector: 'drag-drop-to-upload',
    templateUrl: './drag-drop-to-upload.component.html'
})
export class DragDropToUploadComponent implements OnInit {

    public title: string = "Image Manager";
    public selectImageType: string = "Select Image Type/Destination"
    public files: any[] = [];
    public account: string;
    public siteContext?: SiteContext;
    public dir: string;
    public DDUploadInterface?: DragDropToUploadInterface;
    public imageDirectory: string;
    public localImages: Images = {
        "images/before-after-cycle": [],
        "images/office-tour": [],
        "images/slideshow": [],
        "images/spotlight": [],
        "uploads/images": []
    }

    directoryArray = [
        {value: 'images/before-after-cycle', display: 'Before and After Images'},
        {value: 'images/office-tour', display: 'Office Tour Images'},
        {value: 'images/slideshow', display: 'Slideshow Images'},
        {value: 'images/spotlight', display: 'Spotlight Images'},
        {value: 'uploads/images', display: 'Team, Interior Pages, Location images'}
    ]

    constructor(private _snackBar: MatSnackBar,
                public _dragDropToUploadService: DragDropToUploadService,
                private _siteContextProviderService: SiteContextProviderService,
                private _snackBarService: SnackbarService,
                private _imageManagerCopyToLocalDirService: ImageManagerCopyToLocalDirService
    ) {
    }

    ngOnInit(): void {
        this.getSiteContext();
    }

    /**
     * Get current site context
     */
    getSiteContext() {
        this._siteContextProviderService.getCurrentContext().subscribe(
            res => {
                this.siteContext = res;
                this.account = this.siteContext.account;
                this.getAccountImageFiles("uploads/images");
                this.getAccountImageFiles("images/before-after-cycle");
                this.getAccountImageFiles("images/office-tour");
                this.getAccountImageFiles("images/slideshow");
                this.getAccountImageFiles("images/spotlight");
            },
            error => console.log(error)
        );
    }

    imageDirectoryChanged(e: { value: string; }) {
        this.dir = e.value;
    }

    onFileChange(files: FileList) {

        // if nothing is selected
        if (!this.dir) {
            this.dir = 'uploads/images';
        }

        this._dragDropToUploadService.copyImagesToLocal(this.account, files, this.dir).subscribe(
            data => {

                this.getAccountImageFiles(this.dir);

                this._snackBar.open("Successfully upload!", 'Close', {
                    duration: 2000,
                });
            }, error => {
                console.log(error);
            });
    }

    // get local existing images - not data
    getAccountImageFiles(directory: string) {
        if (!this.siteContext) {
            return;
        }

        this._dragDropToUploadService.listLocalAccountImages(this.siteContext.account, directory).subscribe(
            localImageData => {
                localImageData.map(i => i + '?v=' + Date.now().toString());
                this.localImages[directory] = localImageData;
                if (!this.localImages) {
                    this._snackBarService.openSnackBar('Add ' + this.imageDirectory + ' images to assets/images/' + this.imageDirectory, '');
                }
            },
            error => console.log(error)
        );
    }

    /**
     * Deletes file from account-name /assets/uploads/images/itemVal using php unlink
     * @param directory
     * @param image
     */
    deleteImage(directory: string, image: string) {
        // deletes image from assets/uploads/images using endpoint
        this._imageManagerCopyToLocalDirService.deleteImageFromLocalDir(this.siteContext.account, directory, image).subscribe(
            data => {
                // do not show img element if n/a
                this.localImages[directory] = this.localImages[directory].filter(i => i !== image);
            },
            error => console.log(error)
        );
    }

}
