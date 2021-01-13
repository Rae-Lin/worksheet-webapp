import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagementModifyComponent } from './project-management-modify.component';

describe('ProjectManagementModifyComponent', () => {
  let component: ProjectManagementModifyComponent;
  let fixture: ComponentFixture<ProjectManagementModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectManagementModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectManagementModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
