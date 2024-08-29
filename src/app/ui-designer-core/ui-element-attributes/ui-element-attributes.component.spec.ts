import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiElementAttributesComponent } from './ui-element-attributes.component';

describe('UiElementAttributesComponent', () => {
  let component: UiElementAttributesComponent;
  let fixture: ComponentFixture<UiElementAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiElementAttributesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiElementAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
