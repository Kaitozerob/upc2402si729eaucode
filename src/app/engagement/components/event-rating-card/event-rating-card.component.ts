import {Component, Input} from '@angular/core';
import {DatePipe, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AttendeeService} from '../../../registration/services/attendee/attendee.service';
import {RatingService} from '../../services/rating/rating.service';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatCard, MatCardContent, MatCardFooter, MatCardModule, MatCardTitle} from '@angular/material/card';
import {Rating} from '../../model/rating/rating.entity';
import {Attendee} from '../../../registration/model/attendee/attendee.entity';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-event-rating-card',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    MatButton,
    MatCardFooter,
    MatCardContent,
    MatCardTitle,
    MatCard,
    MatButtonModule,
    MatCardModule,
    MatCardTitle,
    TranslateModule,
    DatePipe
  ],
  templateUrl: './event-rating-card.component.html',
  styleUrl: './event-rating-card.component.css'
})
export class EventRatingCardComponent {
  @Input() eventId!: number;  // ID del evento que se pasará al componente
  ticketIdentifier: string = '';
  rating: number = 1;
  message: string = '';
  showTicketCard: boolean = false;  // Nueva propiedad para controlar la visibilidad de la tarjeta
  attendee!: Attendee;  // Guardará los datos del asistente que fue utilizado para calificar

  constructor(
    private attendeeService: AttendeeService,
    private ratingService: RatingService
  ) {}

  rateEvent(): void {
    this.attendeeService.getAttendees().subscribe((attendees: Attendee[]) => {
      const attendee = attendees.find((a: Attendee) => a.ticketIdentifier === this.ticketIdentifier);

      if (!attendee) {
        this.message = 'Invalid Ticket Identifier';
        this.showTicketCard = false;
        return;
      }

      if (!attendee.checkedInAt) {
        this.message = 'You can only rate events you have attended to';
        this.showTicketCard = false;
        return;
      }

      // Verificar si ya existe una calificación para este attendee en este evento
      this.ratingService.getRatings().subscribe((ratings: Rating[]) => {
        const existingRating = ratings.find((r: Rating) =>
          r.attendeeId === attendee.id && r.eventId === this.eventId
        );

        if (existingRating) {
          this.message = 'You have already rated this event';
          this.showTicketCard = false;
          return;
        }

        // Crear una nueva calificación
        const newRating = {
          attendeeId: attendee.id,
          eventId: this.eventId,
          rating: this.rating,
          ratedAt: new Date().toISOString()
        };

        this.ratingService.addRating(newRating).subscribe(() => {
          // Mostrar la tarjeta del ticket una vez que la calificación se haya registrado con éxito
          this.message = `Event successfully rated for Ticket: ${this.ticketIdentifier}`;
          this.attendee = attendee;  // Guardar el asistente para mostrar sus detalles
          this.showTicketCard = true;  // Mostrar la tarjeta del ticket
        });
      });
    });
  }
}
