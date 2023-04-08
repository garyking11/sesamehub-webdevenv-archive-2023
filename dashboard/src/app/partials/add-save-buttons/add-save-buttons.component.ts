import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'add-save-buttons',
    templateUrl: './add-save-buttons.component.html',
    styleUrls: ['./add-save-buttons.component.css']
})
export class AddSaveButtonsComponent {
    @Output() addSaveButton = new EventEmitter();

    addItem() {
        this.addSaveButton.emit();
    }
}
