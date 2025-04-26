import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { UIDraggableDirective, UIDroppableDirective } from '@ui/directives';
import { IUiElement } from '@ui/model';
import { UiColorGenPipe } from '@ui/pipes';
import { UiStoreService } from '@ui/services';

@Component({
    selector: 'ui-dom-viewer',
    imports: [
        CommonModule,
        UiColorGenPipe,
        UIDraggableDirective,
        UIDroppableDirective,
    ],
    templateUrl: './ui-dom-viewer.component.html',
    styleUrl: './ui-dom-viewer.component.scss'
})
export class UiDomViewerComponent {


  constructor(protected uiStore : UiStoreService){

  }

  onDrop(event: any, dom: any) {
    console.warn(event, dom);
  }
}
