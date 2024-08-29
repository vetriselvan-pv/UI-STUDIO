import { Injectable, QueryList, TemplateRef } from '@angular/core';
import { UiDynamicTemplateDirective } from '@ui/directives';

@Injectable({
  providedIn: 'root'
})
export class DynamicTemplateService {
  templateRefs!: QueryList<UiDynamicTemplateDirective>;

  constructor() { }

  getTemplate(tagName: string): TemplateRef<unknown> | null {
    const template = this.templateRefs
        .toArray()
        .find(
            (x) => x.tagName.toLowerCase() === tagName.toLowerCase()
        )?.template;
    return template ? template : null;
}
}
