import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiHtmlElementsComponent } from './ui-html-elements.component';

describe('UiHtmlElementsComponent', () => {
  let component: UiHtmlElementsComponent;
  let fixture: ComponentFixture<UiHtmlElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiHtmlElementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiHtmlElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
