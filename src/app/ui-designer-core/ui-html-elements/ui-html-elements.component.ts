import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject, QueryList, ViewChildren } from '@angular/core';
import { UIDraggableDirective, UIDroppableDirective, UiDynamicTemplateDirective } from '@ui/directives';
import { DynamicTemplateService } from '@ui/services';

@Component({
  selector: 'ui-html-elements',
  standalone: true,
  imports: [CommonModule,UiDynamicTemplateDirective,UIDraggableDirective, UIDroppableDirective],
  templateUrl: './ui-html-elements.component.html',
  styleUrl: './ui-html-elements.component.scss'
})
export class UiHtmlElementsComponent implements AfterViewInit {
  @ViewChildren(UiDynamicTemplateDirective)
    templateRefs!: QueryList<UiDynamicTemplateDirective>;

  protected dynamicTemplateService : DynamicTemplateService = inject(DynamicTemplateService);

  ngAfterViewInit(): void {
      this.dynamicTemplateService.templateRefs = this.templateRefs
  }

  onDrop(ev:any){
    console.log(ev)
  }
}
