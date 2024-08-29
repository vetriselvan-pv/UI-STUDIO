import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDomViewerComponent } from './ui-dom-viewer.component';

describe('UiDomViewerComponent', () => {
  let component: UiDomViewerComponent;
  let fixture: ComponentFixture<UiDomViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiDomViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiDomViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
