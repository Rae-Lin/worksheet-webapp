import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsModifyComponent } from './departments-modify.component';

describe('DepartmentsModifyComponent', () => {
  let component: DepartmentsModifyComponent;
  let fixture: ComponentFixture<DepartmentsModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentsModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
