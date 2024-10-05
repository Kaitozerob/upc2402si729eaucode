import { Component } from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {
  EventSummatyContentComponent
} from '../../../registration/pages/event-summaty-content/event-summaty-content.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TranslateModule,
    EventSummatyContentComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
