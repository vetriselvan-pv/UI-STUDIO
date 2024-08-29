import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiElementsListComponent } from './ui-elements-list.component';

describe('UiElementsListComponent', () => {
  let component: UiElementsListComponent;
  let fixture: ComponentFixture<UiElementsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiElementsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiElementsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
