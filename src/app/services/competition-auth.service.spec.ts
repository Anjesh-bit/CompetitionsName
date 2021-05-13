import { TestBed } from '@angular/core/testing';

import { CompetitionAuthService } from './competition-auth.service';

describe('CompetitionAuthService', () => {
  let service: CompetitionAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompetitionAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
