import { TestBed } from '@angular/core/testing';

import { AddCompetitionServicesService } from './add-competition-services.service';

describe('AddCompetitionServicesService', () => {
  let service: AddCompetitionServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddCompetitionServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
