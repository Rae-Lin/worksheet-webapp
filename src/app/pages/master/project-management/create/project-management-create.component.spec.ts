import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagementCreateComponent } from './project-management-create.component';

describe('ProjectManagementCreateComponent', () => {
  let component: ProjectManagementCreateComponent;
  let fixture: ComponentFixture<ProjectManagementCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectManagementCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectManagementCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
