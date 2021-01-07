import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestNewsModalComponent } from './latest-news-modal.component';

describe('LatestNewsModalComponent', () => {
  let component: LatestNewsModalComponent;
  let fixture: ComponentFixture<LatestNewsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestNewsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestNewsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
