import { Directive, inject, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[uiDynamicTemplate]',
  standalone: true
})
export class UiDynamicTemplateDirective {
  @Input('uiDynamicTemplate') tagName = '';

  public template: TemplateRef<unknown> = inject(TemplateRef<unknown>)

  constructor() { }

}
