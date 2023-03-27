import { TestBed } from '@angular/core/testing';

import { FekriService } from './fekri.service';

describe('FekriService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FekriService = TestBed.get(FekriService);
    expect(service).toBeTruthy();
  });
});
