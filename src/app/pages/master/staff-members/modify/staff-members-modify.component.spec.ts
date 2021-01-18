import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffMembersModifyComponent } from './staff-members-modify.component';

describe('StaffMembersModifyComponent', () => {
  let component: StaffMembersModifyComponent;
  let fixture: ComponentFixture<StaffMembersModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffMembersModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffMembersModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
