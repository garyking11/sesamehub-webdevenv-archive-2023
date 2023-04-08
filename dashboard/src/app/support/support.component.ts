import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dev-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.less']
})
export class SupportComponent implements OnInit {

  public title: string = 'Support';
  constructor() { }

  ngOnInit() {
  }

}
