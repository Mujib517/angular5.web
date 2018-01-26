import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[border]'
})
export class BorderDirective {

    constructor(private el: ElementRef) {
        console.log('in directive');
        this.el.nativeElement.style.border = "1px solid black";
    }
}