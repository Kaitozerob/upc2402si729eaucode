import { Component } from '@angular/core';
import {EventRatingCardComponent} from '../../components/event-rating-card/event-rating-card.component';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-event-rating-content',
  standalone: true,
  imports: [
    EventRatingCardComponent,
    TranslateModule
  ],
  templateUrl: './event-rating-content.component.html',
  styleUrl: './event-rating-content.component.css'
})
export class EventRatingContentComponent {
  eventId: number = 1;

}
