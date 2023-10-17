import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(
    private httpClient : HttpClient
  ) { }

  saveReservation(reservation: any) {
    return this.httpClient.post("http://localhost:8080/reservation/save", reservation);
  }
}
