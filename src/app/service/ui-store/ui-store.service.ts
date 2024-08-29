import { Injectable, signal } from '@angular/core';
import { IUiElement } from '@ui/model';

@Injectable({
  providedIn: 'root'
})
export class UiStoreService {

  DomElements = signal<Partial<IUiElement[]>>([
    {
      id: '',
      altText: '',
      child: [
        {
          id: '',
          altText: '',
          child: [],
          cssClass: '',
          style: '',
          tag: 'h1',
          title: '',
          innerText: 'Heading ',
          zones: ['dbZone'],
        },
        {
          id: '',
          altText: '',
          child: [],
          cssClass: '',
          style: '',
          tag: 'h1',
          title: '',
          innerText: 'Heading ',
          zones: ['dbZone'],
        },
        {
          id: '',
          altText: '',
          child: [],
          cssClass: '',
          style: '',
          tag: 'h6',
          title: '',
          innerText: 'Heading ',
          zones: ['dbZone'],
        },
      ],
      cssClass: '',
      style: '',
      tag: 'div',
      title: '',
      innerText: 'Heading ',
      zones: ['dbZone'],
    },
  ]);

  constructor() { }
}
