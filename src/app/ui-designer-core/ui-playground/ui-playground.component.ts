import { CommonModule } from '@angular/common';
import { Component, inject, signal, Signal } from '@angular/core';
import { DynamicTemplateService, UiStoreService } from '@ui/services';
import { UiHtmlElementsComponent } from '../ui-html-elements/ui-html-elements.component';
import { IUiElement } from '../../model';
import { UIDraggableDirective, UIDroppableDirective } from '@ui/directives';

@Component({
  selector: 'ui-playground',
  standalone: true,
  imports: [CommonModule, UiHtmlElementsComponent, UIDraggableDirective , UIDroppableDirective],
  templateUrl: './ui-playground.component.html',
  styleUrl: './ui-playground.component.scss',
})
export class UiPlaygroundComponent {


  protected dynamicTemplateService: DynamicTemplateService = inject(
    DynamicTemplateService
  );

  onDrop(event:any){
    console.log(event)
  }

  constructor(protected uiStore : UiStoreService){

  }
}
