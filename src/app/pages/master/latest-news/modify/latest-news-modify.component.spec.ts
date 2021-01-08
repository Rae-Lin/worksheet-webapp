import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestNewsModifyComponent } from './latest-news-modify.component';

describe('LatestNewsModifyComponent', () => {
  let component: LatestNewsModifyComponent;
  let fixture: ComponentFixture<LatestNewsModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestNewsModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestNewsModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
