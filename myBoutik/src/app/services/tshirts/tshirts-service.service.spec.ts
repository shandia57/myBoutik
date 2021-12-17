import { TestBed } from '@angular/core/testing';

import { TshirtsServiceService } from './tshirts-service.service';

describe('TshirtsServiceService', () => {
  let service: TshirtsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TshirtsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
