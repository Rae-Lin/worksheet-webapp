import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarSettingsModifyComponent } from './calendar-settings-modify.component';

describe('CalendarSettingsModifyComponent', () => {
  let component: CalendarSettingsModifyComponent;
  let fixture: ComponentFixture<CalendarSettingsModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarSettingsModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarSettingsModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
