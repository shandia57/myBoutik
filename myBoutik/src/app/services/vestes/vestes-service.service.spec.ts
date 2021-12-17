import { TestBed } from '@angular/core/testing';

import { VestesServiceService } from './vestes-service.service';

describe('VestesServiceService', () => {
  let service: VestesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VestesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
