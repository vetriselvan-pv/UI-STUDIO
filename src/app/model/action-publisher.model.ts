

export enum EComponentId  {
  'ui-designer' = 'UIDESIGNER',
  'ui-element-attributes' = 'UIELEMENTATTRIBUTES',
  'ui-element-list' = 'UIELEMENTLIST',
  'ui-playground' = 'UIPLAYGROUND'
}

export type TComponentId = 'UIDESIGNER' | 'UIELEMENTATTRIBUTES' | 'UIELEMENTLIST' | 'UIPLAYGROUND';

export interface TComponentActionMethod   {
  'UIDESIGNER' : 'DOPREINIT' | 'DO',
  'UIELEMENTATTRIBUTES' : 'POST',
  'UIELEMENTLIST' : '',
  'UIPLAYGROUND' : ''
}

export type TActionParams =  {
  [K in keyof TComponentActionMethod] : { componentId  : K , method : TComponentActionMethod[K] }
}[keyof TComponentActionMethod]


