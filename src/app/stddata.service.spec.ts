import { TestBed, inject } from '@angular/core/testing';

import { StddataService } from './stddata.service';

describe('StddataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StddataService]
    });
  });

  it('should be created', inject([StddataService], (service: StddataService) => {
    expect(service).toBeTruthy();
  }));
});
