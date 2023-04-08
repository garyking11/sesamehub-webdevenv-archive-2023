import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {OfficeTourInterface} from '../office-tour/office-tour.interface';

@Component({
  selector: 'dev-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent  implements OnInit{
  public title: string = 'resources';
  public item;
  icon: boolean = false;

  showExpandIcon(){
    this.icon = !this.icon;
  }
  constructor() { }

  ngOnInit() {
  }

}
