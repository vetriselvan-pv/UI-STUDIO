import { Component } from '@angular/core';
import { UiElementAttributesComponent } from '../ui-element-attributes/ui-element-attributes.component';
import { UiElementsListComponent } from '../ui-elements-list/ui-elements-list.component';
import { UiPlaygroundComponent } from '../ui-playground/ui-playground.component';
import { UiDomViewerComponent } from '../ui-dom-viewer/ui-dom-viewer.component';

@Component({
    selector: 'app-ui-designer',
    imports: [UiPlaygroundComponent, UiElementsListComponent, UiElementAttributesComponent, UiDomViewerComponent],
    templateUrl: './ui-designer.component.html',
    styleUrl: './ui-designer.component.scss'
})
export class UiDesignerComponent {

}
