import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  firstName!: string;
  lastName!: string;
  email!: string;
  contactNo!: string;

  constructor(
    private reservationService: ReservationService
  ) {};

  ngOnInit(): void {
      
  }

  onSubmit() {
    this.saveReservation();
  }

  saveReservation(): void {

    let reservationModel = {
      "firstName": this.firstName,
      "lastName": this.lastName,
      "email": this.email,
      "contactNo": this.contactNo
    }

    this.reservationService.saveReservation(reservationModel).subscribe((data: any) => {
      alert("Successfully Reserved...")
    });
  }

}
