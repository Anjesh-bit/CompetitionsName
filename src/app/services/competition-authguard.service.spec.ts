import { TestBed } from '@angular/core/testing';

import { CompetitionAuthguardService } from './competition-authguard.service';

describe('CompetitionAuthguardService', () => {
  let service: CompetitionAuthguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompetitionAuthguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
