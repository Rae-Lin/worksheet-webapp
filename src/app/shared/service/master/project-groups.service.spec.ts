import { TestBed } from '@angular/core/testing';

import { ProjectGroupsService } from './project-groups.service';

describe('ProjectGroupsService', () => {
  let service: ProjectGroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
