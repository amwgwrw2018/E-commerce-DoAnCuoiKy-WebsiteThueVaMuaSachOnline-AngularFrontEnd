import { TestBed, inject } from '@angular/core/testing';

import { GetBookServiceService } from './get-book-service.service';

describe('GetBookServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetBookServiceService]
    });
  });

  it('should be created', inject([GetBookServiceService], (service: GetBookServiceService) => {
    expect(service).toBeTruthy();
  }));
});
