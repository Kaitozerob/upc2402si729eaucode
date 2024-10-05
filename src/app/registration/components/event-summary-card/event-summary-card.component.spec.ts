import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSummaryCardComponent } from './event-summary-card.component';

describe('EventSummaryCardComponent', () => {
  let component: EventSummaryCardComponent;
  let fixture: ComponentFixture<EventSummaryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventSummaryCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventSummaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
