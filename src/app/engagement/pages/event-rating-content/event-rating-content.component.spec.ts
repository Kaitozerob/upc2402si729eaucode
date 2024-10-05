import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRatingContentComponent } from './event-rating-content.component';

describe('EventRatingContentComponent', () => {
  let component: EventRatingContentComponent;
  let fixture: ComponentFixture<EventRatingContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventRatingContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventRatingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
