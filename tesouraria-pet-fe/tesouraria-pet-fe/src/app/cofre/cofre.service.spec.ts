import { TestBed } from '@angular/core/testing';

import { CofreService } from './cofre.service';

describe('CofreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CofreService = TestBed.get(CofreService);
    expect(service).toBeTruthy();
  });
});
