import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionDescriptionComponent } from './accordion-description.component';

describe('AccordionDescriptionComponent', () => {
  let component: AccordionDescriptionComponent;
  let fixture: ComponentFixture<AccordionDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
