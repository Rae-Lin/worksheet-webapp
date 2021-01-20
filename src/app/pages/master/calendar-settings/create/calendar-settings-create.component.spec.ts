import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarSettingsCreateComponent } from './calendar-settings-create.component';

describe('CalendarSettingsCreateComponent', () => {
  let component: CalendarSettingsCreateComponent;
  let fixture: ComponentFixture<CalendarSettingsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarSettingsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarSettingsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
