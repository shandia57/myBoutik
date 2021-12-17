import { TestBed } from '@angular/core/testing';

import { PullServiceService } from './pull-service.service';

describe('PullServiceService', () => {
  let service: PullServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PullServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
