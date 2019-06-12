import { TestBed } from '@angular/core/testing';

import { CaixinhaService } from './caixinha.service';

describe('CaixinhaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaixinhaService = TestBed.get(CaixinhaService);
    expect(service).toBeTruthy();
  });
});
