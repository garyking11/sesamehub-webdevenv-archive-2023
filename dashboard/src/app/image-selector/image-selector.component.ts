import {Component, Input, OnInit} from '@angular/core';
import {FileInfo, GetLocalFilesService} from '../services/get-local-files.service';
import {SiteContextProviderService} from '../../dev-tools/site-context-provider';
import {Image} from "./image";

@Component({
  selector: 'image-selector',
  templateUrl: './image-selector.component.html',
  styleUrls: ['./image-selector.component.css']
})
export class ImageSelectorComponent implements OnInit {
  @Input()
  public directory: string;

  @Input()
  public image: Image = null;

  @Input()
  public caption: string = "Image";

  public images: FileInfo[] = [];
  public account?: string;

  constructor(
      private _siteContextProviderService: SiteContextProviderService,
      private _getLocalFilesService: GetLocalFilesService
  ) {
  }

  ngOnInit() {
    this.account = this._siteContextProviderService.account;
    this._getLocalFilesService.listLocalFiles(this.account, this.directory).subscribe(files => {
      this.images = files.filter(f => f.mime && f.mime.startsWith('image/'));
    });
  }

  updateSize() {
    let image = this.images.find(i => i.path === this.image.path);

    if (image) {
      this.image.width = image.width;
      this.image.height = image.height;
    }
  }
}
