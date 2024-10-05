import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSummatyContentComponent } from './event-summaty-content.component';

describe('EventSummatyContentComponent', () => {
  let component: EventSummatyContentComponent;
  let fixture: ComponentFixture<EventSummatyContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventSummatyContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventSummatyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
