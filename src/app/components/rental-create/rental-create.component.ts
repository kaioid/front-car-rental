import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-create',
  templateUrl: './rental-create.component.html',
  styleUrls: ['./rental-create.component.css']
})
export class RentalCreateComponent implements OnInit {

  rental: Rental = new Rental();
  submitted = false;
  constructor(private rentalService: RentalService, private router: Router) { }

  ngOnInit() {
  }

  newRental(): void {
    this.submitted = false;
    this.rental = new Rental;
  }

  save() {
    this.rentalService.createRental(this.rental).subscribe(data=>console.log(data), error => console.log(error));
    this.rental = new Rental();
    this.gotoList();
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/car-rentals'])
  }

}
