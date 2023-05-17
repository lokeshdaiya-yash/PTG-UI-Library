import { TestBed } from '@angular/core/testing';

import { PasswordupdatedGuard } from './passwordupdated.guard';

describe('PasswordupdatedGuard', () => {
  let guard: PasswordupdatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PasswordupdatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
