import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IUiElement } from '@ui/model';
import { debounceTime, map, Observable, switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class UiMenuListService {

  private _httpClient : HttpClient = inject(HttpClient);
  constructor() { }

  public getUIMenuList():Observable<IUiElement[]>{
    return timer(5000).pipe(switchMap(() => this._httpClient.get('assets/json/html-tag-list.json').pipe(debounceTime(5000),map((res:any)=> {
      return res.html_tag
    }))))
  }
}
