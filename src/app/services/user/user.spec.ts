import { TestBed } from '@angular/core/testing';

import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { inject, NgModule } from '@angular/core';

describe('User', () => {
  let service: User;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClient],
    });
  });

  it('should be created', () => {});
});
