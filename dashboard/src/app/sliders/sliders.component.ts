import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SnackbarService} from "../services/snackbar.service";

@Component({
  selector: 'dev-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.css']
})
export class SlidersComponent implements OnInit {
  encapsulation: ViewEncapsulation.None
  constructor(
      public _snackBarService: SnackbarService
  ) { }

  ngOnInit(): void {
  }

}
