import { TestBed } from '@angular/core/testing';

import { AddItemsService } from './add-items.service';

describe('AddItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddItemsService = TestBed.get(AddItemsService);
    expect(service).toBeTruthy();
  });
});
