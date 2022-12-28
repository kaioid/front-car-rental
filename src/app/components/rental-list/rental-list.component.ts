import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {

  openRentals: Observable<Rental[]>;
  closedRentals: Observable<Rental[]>;

  constructor(private rentalService: RentalService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.openRentals = this.rentalService.getOpenRentalList();
    this.closedRentals = this.rentalService.getClosedRentalList();
  }

  deleteRental(id: number){
    this.rentalService.deleteRental(id).subscribe(data=>{
      console.log(data)
      this.reloadData();
    },
    error => console.log(error));
  }

  updateRental(id: number){
    this.router.navigate(['rentals/update', id]);
  }

}
