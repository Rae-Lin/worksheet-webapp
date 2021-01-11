import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectGroupsModifyComponent } from './project-groups-modify.component';

describe('ProjectGroupsModifyComponent', () => {
  let component: ProjectGroupsModifyComponent;
  let fixture: ComponentFixture<ProjectGroupsModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectGroupsModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectGroupsModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
