import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffMembersCreateComponent } from './staff-members-create.component';

describe('StaffMembersCreateComponent', () => {
  let component: StaffMembersCreateComponent;
  let fixture: ComponentFixture<StaffMembersCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffMembersCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffMembersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
