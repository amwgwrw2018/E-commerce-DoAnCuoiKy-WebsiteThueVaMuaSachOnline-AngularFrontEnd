import { TestBed, inject } from '@angular/core/testing';

import { UserInfoServiceService } from './user-info-service.service';

describe('UserInfoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserInfoServiceService]
    });
  });

  it('should be created', inject([UserInfoServiceService], (service: UserInfoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
