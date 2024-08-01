import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShapeType]',
  standalone: true
})
export class ShapeTypeDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) {}

  @Input() set appShapeType(shapeType: string) {
    console.log('appShapeType directive is invoked - ', shapeType);
    // if (shapeType === 'rectangle' || shapeType === 'circle'  || shapeType === 'pentagon') {
    //   this.viewContainer.createEmbeddedView(this.templateRef);
    // } else {
    //   this.viewContainer.clear();
    // }

    // if (shapeType === 'rectangle' || shapeType === 'circle'  || shapeType === 'pentagon') {
    //     this.viewContainer.createEmbeddedView(this.templateRef);
    //   }

    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef);
  }

}
