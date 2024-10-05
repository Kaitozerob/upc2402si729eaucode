export class Attendee {
  id: number;
  firstName: string;
  lastName: string;
  eventId: number;
  ticketIdentifier: string;
  checkedInAt: Date | null;

  constructor(data: any) {
    this.id = data.id || 0;
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
    this.eventId = data.eventId || 0;
    this.ticketIdentifier = data.ticketIdentifier || '';
    this.checkedInAt = data.checkedInAt ? new Date(data.checkedInAt) : null;
  }
}
