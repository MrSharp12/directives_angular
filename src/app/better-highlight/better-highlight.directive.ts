import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core';


@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  //we can't pass the reference itself
  //we need to get access to the underlying element
  //then pass that as it's first element here
  //setStyle takes a couple of arguments here
  //1. define what style we want to set 
  //2. the value we want to assign for this property
  //3. flags object (it is optional), things like !important
  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  }

}
//why is renderer a better approach?
//angular is not limited to running in the browser
//it also works with service workers
//these are environments where you might not have access to the DOM
//in access the native style of this element, you may get an error in some cases
