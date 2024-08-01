import { AfterViewInit, Component, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ShapeTypeDirective } from '../../directives/shape-type.directive';

@Component({
  selector: 'app-shapes',
  standalone: true,
  imports: [ShapeTypeDirective],
  templateUrl: './shapes.component.html',
  styleUrl: './shapes.component.scss'
})
export class ShapesComponent {

@Input() shapeType = 'circle';

@ViewChild("container", {read: ViewContainerRef}) container: ViewContainerRef | undefined;
//@ViewChild(shapeType) tpl: TemplateRef<any>;

// ngAfterViewInit() {
//     let view = this.tpl.createEmbeddedView(null);
//     this.container.insert(view);
// }

}
