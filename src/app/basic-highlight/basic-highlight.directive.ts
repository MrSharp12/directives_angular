import { Directive, ElementRef, OnInit } from '@angular/core';


//we wrap appBasicHighlight in square brackets
//this means it will be recognized without square brackets to an element
@Directive({
    selector: '[appBasicHighlight]'
})
//a directive doesn't have a view, doesn't have a template
export class BasicHighlightDirective implements OnInit{
    constructor(private elementRef: ElementRef) {
    }

    //what we are doing here
    //we are getting access to the element the directive was placed on
    //and then overwriting the style of this element
    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}