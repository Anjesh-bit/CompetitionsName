import { TestBed } from '@angular/core/testing';

import { AuthServicesGuardService } from './auth-services-guard.service';

describe('AuthServicesGuardService', () => {
  let service: AuthServicesGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthServicesGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
