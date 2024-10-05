import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private apiUrl = 'http://localhost:3000/ratings';

  constructor(private http: HttpClient) {}

  // Obtener todas las calificaciones
  getRatings(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Obtener una calificación por su ID
  getRatingById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Agregar una nueva calificación
  addRating(rating: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, rating);
  }

  // Actualizar una calificación existente
  updateRating(id: number, rating: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, rating);
  }

  // Eliminar una calificación
  deleteRating(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}

