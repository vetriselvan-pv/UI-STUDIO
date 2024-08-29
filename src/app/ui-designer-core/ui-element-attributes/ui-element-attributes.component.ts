import { CommonModule } from '@angular/common';
import { Component, Signal, signal } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'ui-element-attributes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-element-attributes.component.html',
  styleUrl: './ui-element-attributes.component.scss',
})
export class UiElementAttributesComponent {
  /**
   * @description to handle the attributes drawer is opened or closed
   */
  protected mode: Signal<'collapsed' | 'opened'> = signal('collapsed');

  /**
   * @description loading the attributes based on the config from the json
   */
  protected attributesList: Signal<Observable<Array<any>>> = signal(of([]));

}
