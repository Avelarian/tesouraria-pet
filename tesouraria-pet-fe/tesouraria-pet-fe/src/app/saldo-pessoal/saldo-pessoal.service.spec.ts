import { TestBed } from '@angular/core/testing';

import { SaldoPessoalService } from './saldo-pessoal.service';

describe('SaldoPessoalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaldoPessoalService = TestBed.get(SaldoPessoalService);
    expect(service).toBeTruthy();
  });
});
