import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsCreateComponent } from './departments-create.component';

describe('DepartmentsCreateComponent', () => {
  let component: DepartmentsCreateComponent;
  let fixture: ComponentFixture<DepartmentsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
