export interface IUiElement {
  id: string;
  tag: TTag;
  cssClass: string;
  altText: string;
  title: string;
  style: string;
  child: Partial<IUiElement[]>;
  innerText: string;
  selector?: string;
  icon?: string;
  hoverText?: string;
  placeholder?: string;
  defaultValue?: string;
  value?: unknown;
  uId?: string;
  zones?: Array<string>;
  forName?: string;
  parentId?: string;
}

/**
 * @description to define the html tag and other tag as well for now HTML tag are added going for
 *  we need to create custom tag based on the project as seperate type and we need to union with this type
 */
export type TTag = THtmltag;

export type THtmltag =
  | 'a'
  | 'abbr'
  | 'acronym'
  | 'address'
  | 'area'
  | 'article'
  | 'aside'
  | 'audio'
  | 'b'
  | 'base'
  | 'bdi'
  | 'bdo'
  | 'big'
  | 'blockquote'
  | 'body'
  | 'br'
  | 'button'
  | 'canvas'
  | 'caption'
  | 'center'
  | 'cite'
  | 'code'
  | 'col'
  | 'colgroup'
  | 'data'
  | 'datalist'
  | 'dd'
  | 'del'
  | 'details'
  | 'dd'
  | 'dt'
  | 'del'
  | 'dfn'
  | 'dialog'
  | 'dir'
  | 'div'
  | 'dl'
  | 'em'
  | 'embed'
  | 'fencedframe'
  | 'fieldset'
  | 'figcaption'
  | 'figure'
  | 'font'
  | 'footer'
  | 'form'
  | 'frame'
  | 'frameset'
  | 'head'
  | 'header'
  | 'hgroup'
  | 'hr'
  | 'html'
  | 'i'
  | 'iframe'
  | 'img'
  | 'input'
  | 'ins'
  | 'kbd'
  | 'label'
  | 'legend'
  | 'li'
  | 'link'
  | 'main'
  | 'map'
  | 'mark'
  | 'marquee'
  | 'menu'
  | 'menuitem'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'meta'
  | 'meter'
  | 'nav'
  | 'nobr'
  | 'noembed'
  | 'noframes'
  | 'noscript'
  | 'object'
  | 'ol'
  | 'optgroup'
  | 'option'
  | 'ouput'
  | 'p'
  | 'param'
  | 'picture'
  | 'plaintext'
  | 'portal'
  | 'pre'
  | 'progress'
  | 'q'
  | 'rb'
  | 'rp'
  | 'rt'
  | 'rtc'
  | 'ruby'
  | 's'
  | 'samp'
  | 'script'
  | 'search'
  | 'section'
  | 'select'
  | 'slot'
  | 'small'
  | 'source'
  | 'span'
  | 'strike'
  | 'strong'
  | 'style'
  | 'sub'
  | 'table'
  | 'tbody'
  | 'td'
  | 'template'
  | 'textarea'
  | 'tfoot'
  | 'th'
  | 'thead'
  | 'time'
  | 'title'
  | 'tr'
  | 'track'
  | 'tt'
  | 'u'
  | 'ul'
  | 'var'
  | 'video'
  | 'wbr'
  | 'xmp';


  /**
   * @description Need to add the json when you added html tag
   */
  // {
  //   "id": "",
  //   "tag": "_tag_",
  //   "cssClass": "",
  //   "altText": "_tag_",
  //   "title": "_tag_",
  //   "style": "",
  //   "child": [],
  //   "innerText": "_tag_",
  //   "selector": "",
  //   "icon": "",
  //   "hoverText": "_tag_",
  //   "placeholder": "_tag_",
  //   "defaultValue": "",
  //   "value": "",
  //   "uId": "",
  //   "zones": ["div"],
  //   "forName": "_tag_",
  //   "parentId": ""
  // },
