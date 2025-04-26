import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject, OnInit, signal, Signal } from '@angular/core';
import { UIDraggableDirective, UIDroppableDirective } from '@ui/directives';
import { IUiElement } from '@ui/model';
import { UiMenuListService } from '@ui/services';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'ui-elements-list',
    imports: [CommonModule, UIDraggableDirective, UIDroppableDirective],
    templateUrl: './ui-elements-list.component.html',
    styleUrl: './ui-elements-list.component.scss'
})
export class UiElementsListComponent implements AfterViewInit {
  uiMenuList = signal<Observable<IUiElement[]>>(of([]));

  emptyCardsList : Array<number> =  Array.from(Array(25).keys());

  private _uiMenuListService: UiMenuListService = inject(UiMenuListService);


  ngAfterViewInit(): void {
    this.uiMenuList.set( this._uiMenuListService.getUIMenuList());
  }
}
