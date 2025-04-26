import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiHtmlElementsComponent } from './ui-designer-core/ui-html-elements/ui-html-elements.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, UiHtmlElementsComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'studio';

  heading = signal('');


  ngOnInit(): void {
      this.heading.set('Ui Studio');
  }
}
