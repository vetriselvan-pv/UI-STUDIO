import { TestBed } from '@angular/core/testing';

import { ActionPublisherService } from './action-publisher.service';

describe('ActionPublisherService', () => {
  let service: ActionPublisherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionPublisherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
