import { TestBed } from '@angular/core/testing';

import { PontalonsServiceService } from './pontalons-service.service';

describe('PontalonsServiceService', () => {
  let service: PontalonsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PontalonsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
