import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRatingCardComponent } from './event-rating-card.component';

describe('EventRatingCardComponent', () => {
  let component: EventRatingCardComponent;
  let fixture: ComponentFixture<EventRatingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventRatingCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventRatingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
