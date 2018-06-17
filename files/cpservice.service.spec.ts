import { TestBed, inject } from '@angular/core/testing';

import { CpserviceService } from './cpservice.service';

describe('CpserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CpserviceService]
    });
  });

  it('should be created', inject([CpserviceService], (service: CpserviceService) => {
    expect(service).toBeTruthy();
  }));
});
