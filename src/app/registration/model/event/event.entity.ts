export class Event {
  id: number;
  name: string;
  description: string;
  scheduledAt: Date | null;

  constructor(data: any) {
    this.id = data.id || 0;
    this.name = data.name || '';
    this.description = data.description || '';
    this.scheduledAt = data.scheduledAt ? new Date(data.scheduledAt) : null;
  }
}
