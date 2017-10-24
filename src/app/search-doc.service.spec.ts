import { TestBed, inject } from '@angular/core/testing';

import { SearchDocService } from './search-doc.service';

describe('SearchDocService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchDocService]
    });
  });

  it('should be created', inject([SearchDocService], (service: SearchDocService) => {
    expect(service).toBeTruthy();
  }));
});
