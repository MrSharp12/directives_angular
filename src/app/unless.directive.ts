import { Directive, Input, TemplateRef,ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[appUnless]'
})
//we need to get the condition as an input
//unless is still a property, its just a setter of the property
//which is a method which gets executed
//whenever the property changes, and it changes
//whenener it changes outside of this directive, like a condition or parameter
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
//just like ElementRef gave us access to the element that the directive was on
//this is the case with TemplateRef
//the second piece of information is the view container
//template is the what, the other piece is where
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
