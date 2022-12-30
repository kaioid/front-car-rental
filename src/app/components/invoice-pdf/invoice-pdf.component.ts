import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-invoice-pdf',
  templateUrl: './invoice-pdf.component.html',
  styleUrls: ['./invoice-pdf.component.css']
})
export class InvoicePDFComponent implements OnInit {

  id: number;
  rental: Rental;

  constructor(private rentalService: RentalService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.rental = new Rental();
    this.id = this.route.snapshot.params['id'];
    this.rentalService.getRental(this.id).subscribe(data=> {console.log(data);
    this.rental = data},
    error => console.log(error))
  } 
}
