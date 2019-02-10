import { TestBed, inject } from '@angular/core/testing';

import { BookTypeServiceService } from './book-type-service.service';

describe('BookTypeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookTypeServiceService]
    });
  });

  it('should be created', inject([BookTypeServiceService], (service: BookTypeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
