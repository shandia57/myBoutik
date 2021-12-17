import { TestBed } from '@angular/core/testing';

import { ChaussuresServiceService } from './chaussures-service.service';

describe('ChaussuresServiceService', () => {
  let service: ChaussuresServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChaussuresServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
