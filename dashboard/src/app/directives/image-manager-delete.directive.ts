import {Directive, Renderer2, ElementRef, OnInit, HostListener} from "@angular/core";


@Directive({
    selector: '[ImageManagerDeleteDirective]'
})

export class ImageManagerDeleteDirective implements OnInit {
    constructor(private renderer: Renderer2, private el: ElementRef) {}

    private confirmedDeleteImg: boolean =  false;
    ngOnInit() {

        }

    @HostListener('click', ['$event']) onClick($event){
        console.info('clicked: ' + $event);
        console.log(this.renderer['delegate'].component.inputs.innerHTML = '#HELLO HELLO HELLO');
        //this.renderer['delegate'].component.inputs.addClass()
        this.renderer.addClass(this.el.nativeElement, 'hide')
    // }
}}
