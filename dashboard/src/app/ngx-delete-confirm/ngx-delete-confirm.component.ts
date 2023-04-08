import {AfterViewInit, Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'dev-ngx-delete-confirm',
  templateUrl: './ngx-delete-confirm.component.html',
  styleUrls: ['./ngx-delete-confirm.component.css']
})
export class NgxDeleteConfirmComponent   {

  @Input('question') question: string = 'Are you sure?';
  @Output('onConfirm') onConfirm: EventEmitter<any> = new EventEmitter();
  @Output('onCancel') onCancel: EventEmitter<any> = new EventEmitter();
  show: boolean = false;

  sendConfirm(): void {
    this.onConfirm.emit();
    this.show = false;
  }

  sendCancel(): void {
    this.onCancel.emit();
    this.show = false;
  }
}
