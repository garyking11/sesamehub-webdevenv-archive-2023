import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[isChecked]' })


export class IsCheckedDirective {

    isChecked = null;


}
