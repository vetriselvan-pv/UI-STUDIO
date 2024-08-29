import { TestBed } from '@angular/core/testing';

import { UiMenuListService } from './ui-menu-list.service';

describe('UiMenuListService', () => {
  let service: UiMenuListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiMenuListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
