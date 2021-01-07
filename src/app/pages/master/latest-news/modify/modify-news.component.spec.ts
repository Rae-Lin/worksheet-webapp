import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyNewsComponent } from './modify-news.component';

describe('ModifyNewsComponent', () => {
  let component: ModifyNewsComponent;
  let fixture: ComponentFixture<ModifyNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
