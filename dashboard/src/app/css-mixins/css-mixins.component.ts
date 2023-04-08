import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'dev-css-mixins',
  templateUrl: './css-mixins.component.html',
  styleUrls: ['./css-mixins.component.css']
})
export class CssMixinsComponent implements OnInit {

  constructor(public router: Router) {
  }

  ngOnInit() {
  }

}
