import { TestBed } from '@angular/core/testing';

import { BillingPortalService } from './billing-portal.service';

describe('BillingPortalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BillingPortalService = TestBed.get(BillingPortalService);
    expect(service).toBeTruthy();
  });
});
