import { TestBed } from '@angular/core/testing';

import { AccessoiresServiceService } from './accessoires-service.service';

describe('AccessoiresServiceService', () => {
  let service: AccessoiresServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessoiresServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
