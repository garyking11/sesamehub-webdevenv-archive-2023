import {Component, OnInit} from '@angular/core';
import {SiteContextProviderService} from '../../dev-tools/site-context-provider/services/site-context-provider.service';
import {ShowHideContentService} from '../services/show-hide-content.service';
import {Router} from '@angular/router';
@Component({
  selector: 'dev-subnav',
  templateUrl: './subnav.component.html',
  styleUrls: ['./subnav.component.css']
})
export class SubnavComponent implements OnInit {

  constructor(
              private _siteContextProviderService: SiteContextProviderService,
              private _showHideContent: ShowHideContentService,
              private router: Router
  ) {}
  ngOnInit() {
     // console.log(this.router.url);
  }

}
