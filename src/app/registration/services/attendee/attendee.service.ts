import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendeeService {
  private apiUrl = `${environment.apiUrl}/attendees`;

  constructor(private http: HttpClient) {
  }

  // Obtener todos los asistentes
  getAttendees(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Obtener un asistente por su ID
  getAttendeeById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Agregar un nuevo asistente (si lo necesitas)
  addAttendee(attendee: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, attendee);
  }

  // Actualizar un asistente
  updateAttendee(id: number, attendee: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, attendee);
  }

  // Eliminar un asistente (si lo necesitas)
  deleteAttendee(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
