import { TestBed } from '@angular/core/testing';

import { ItemsService } from './items.service';

describe('AddItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemsService = TestBed.get(ItemsService);
    expect(service).toBeTruthy();
  });
});
