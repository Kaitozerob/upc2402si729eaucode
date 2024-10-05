import {Component, OnInit} from '@angular/core';
import {EventSummaryCardComponent} from '../../components/event-summary-card/event-summary-card.component';
import {NgForOf} from '@angular/common';
import {EventService} from '../../services/event/event.service';
import {HttpClient} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatCardContent, MatCardHeader} from '@angular/material/card';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-event-summaty-content',
  standalone: true,
  imports: [
    EventSummaryCardComponent,
    NgForOf,
    MatButtonModule,
    MatCardHeader,
    MatCardContent,
    TranslateModule
  ],
  templateUrl: './event-summaty-content.component.html',
  styleUrl: './event-summaty-content.component.css'
})
export class EventSummatyContentComponent implements OnInit {
  events: any[] = []; // Inicializa un array vacío

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(
      (data) => {
        this.events = data; // Asigna los datos recibidos al array
      },
      (error) => {
        console.error('Error fetching events:', error); // Maneja el error
      }
    );
  }
}
