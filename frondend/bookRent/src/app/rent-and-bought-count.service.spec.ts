import { TestBed, inject } from '@angular/core/testing';

import { RentAndBoughtCountService } from './rent-and-bought-count.service';

describe('RentAndBoughtCountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RentAndBoughtCountService]
    });
  });

  it('should be created', inject([RentAndBoughtCountService], (service: RentAndBoughtCountService) => {
    expect(service).toBeTruthy();
  }));
});
