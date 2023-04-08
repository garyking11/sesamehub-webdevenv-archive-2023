import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import {BuildkitLinksComponent} from './buildkit-links.component';
import {SubnavModule} from '../subnav/subnav.module';
import {ROUTES} from './buildkit-links.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SubnavModule
  ],
  declarations: [BuildkitLinksComponent],
  exports:[BuildkitLinksComponent]
})
export class BuildkitLinksModule { }
