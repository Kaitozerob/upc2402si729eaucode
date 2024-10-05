export class Rating {
  id: number;
  attendeeId: number;
  eventId: number;
  rating: number;
  rateAt: Date | null;

  constructor(data: any) {
    this.id = data.id || 0;
    this.attendeeId = data.attendeeId || 0;
    this.eventId = data.eventId || 0;
    this.rating = data.rating || 0;
    this.rateAt = data.rateAt ? new Date(data.rateAt) : null;
  }
}
