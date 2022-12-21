import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  rentals: Observable<Rental[]>;
  constructor(private invoiceService: RentalService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.rentals = this.invoiceService.getRentalList();
  }

}
