import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSessionComponent } from './project-session.component';

describe('ProjectSessionComponent', () => {
  let component: ProjectSessionComponent;
  let fixture: ComponentFixture<ProjectSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
