import { TestBed, inject } from '@angular/core/testing';

import { InsertDataService } from './insert-data.service';

describe('InsertDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InsertDataService]
    });
  });

  it('should be created', inject([InsertDataService], (service: InsertDataService) => {
    expect(service).toBeTruthy();
  }));
});
