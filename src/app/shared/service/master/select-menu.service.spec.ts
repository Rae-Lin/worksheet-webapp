import { TestBed } from '@angular/core/testing';

import { SelectMenuService } from './select-menu.service';

describe('SelectMenuService', () => {
  let service: SelectMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
