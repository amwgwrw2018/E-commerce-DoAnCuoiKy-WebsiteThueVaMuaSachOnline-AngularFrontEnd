import { TestBed, async, inject } from '@angular/core/testing';

import { CheckRoleAuthorGuardGuard } from './check-role-author-guard.guard';

describe('CheckRoleAuthorGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckRoleAuthorGuardGuard]
    });
  });

  it('should ...', inject([CheckRoleAuthorGuardGuard], (guard: CheckRoleAuthorGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
