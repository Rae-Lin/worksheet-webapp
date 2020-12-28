import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorktimeDetailComponent } from './worktime-detail.component';

describe('WorktimeDetailComponent', () => {
  let component: WorktimeDetailComponent;
  let fixture: ComponentFixture<WorktimeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorktimeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorktimeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
