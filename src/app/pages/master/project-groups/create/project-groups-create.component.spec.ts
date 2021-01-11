import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectGroupsCreateComponent } from './project-groups-create.component';

describe('ProjectGroupsCreateComponent', () => {
  let component: ProjectGroupsCreateComponent;
  let fixture: ComponentFixture<ProjectGroupsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectGroupsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectGroupsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
