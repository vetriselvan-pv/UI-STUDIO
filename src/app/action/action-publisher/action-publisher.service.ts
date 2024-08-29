import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TActionParams } from '../../model';

@Injectable({
  providedIn: 'root',
})
export class ActionPublisherService {
  /**
   * @description action Publisher is gone to play the important role in the communication between various component
   *  ( parent to child as well as sibling componnets also)
   */
  private actionPublisher$ : Subject<TActionParams> = new Subject<TActionParams>();

  constructor() {}

  public triggerAction(arg : TActionParams){
    this.actionPublisher$.next(arg)
  }

  public get action$():Observable<TActionParams>{
    return this.actionPublisher$.asObservable()
  }
}
