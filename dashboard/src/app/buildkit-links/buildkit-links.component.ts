import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'dev-buildkit-links',
  templateUrl: './buildkit-links.component.html',
  styleUrls: ['./buildkit-links.component.css']
})
export class BuildkitLinksComponent implements OnInit {

  constructor(public router: Router) {
  }

  ngOnInit() {
  }

}
