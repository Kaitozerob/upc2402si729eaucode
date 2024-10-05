import {Component, Input, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {TranslateModule} from '@ngx-translate/core';
import {AttendeeService} from '../../services/attendee/attendee.service';
import {RatingService} from '../../../engagement/services/rating/rating.service';
import {Attendee} from '../../model/attendee/attendee.entity';

@Component({
  selector: 'app-event-summary-card',
  standalone: true,
  imports: [
    MatCardFooter,
    MatCardContent,
    MatCardTitle,
    MatCardHeader,
    MatCard,
    TranslateModule
  ],
  templateUrl: './event-summary-card.component.html',
  styleUrl: './event-summary-card.component.css'
})
export class EventSummaryCardComponent implements OnInit {
  @Input() event!: { id: number; name: string; description: string }; // Evento recibido desde el componente padre
  checkedInAttendeesCount: number = 0;
  averageRating: number | null = null;

  constructor(
    private attendeeService: AttendeeService,
    private ratingService: RatingService
  ) {}

  ngOnInit(): void {
    this.getAttendeesForEvent(this.event.id);
  }

  // Obtener los asistentes que hicieron check-in para este evento
  getAttendeesForEvent(eventId: number): void {
    this.attendeeService.getAttendees().subscribe((attendees: Attendee[]) => {
      // Filtra los asistentes que hicieron check-in para el evento actual
      const checkedInAttendees = attendees.filter(attendee => attendee.eventId === eventId && attendee.checkedInAt !== null);
      this.checkedInAttendeesCount = checkedInAttendees.length;

      if (this.checkedInAttendeesCount > 0) {
        this.getRatingsForCheckedInAttendees(checkedInAttendees);
      } else {
        this.averageRating = null;  // No hay asistentes con check-in
      }
    });
  }

  // Obtener las calificaciones para los asistentes que hicieron check-in
  getRatingsForCheckedInAttendees(checkedInAttendees: Attendee[]): void {
    this.ratingService.getRatings().subscribe((ratings: any[]) => {
      // Filtrar las calificaciones para los asistentes que hicieron check-in
      const attendeeRatings = ratings.filter(rating =>
        checkedInAttendees.some(attendee => attendee.id === rating.attendeeId && attendee.eventId === rating.eventId)
      );

      if (attendeeRatings.length > 0) {
        // Calcular el promedio de calificaciones
        const sumOfRatings = attendeeRatings.reduce((acc, rating) => acc + rating.rating, 0);
        this.averageRating = parseFloat((sumOfRatings / attendeeRatings.length).toFixed(1));
      } else {
        this.averageRating = null;  // No ratings
      }
    });
  }
}
