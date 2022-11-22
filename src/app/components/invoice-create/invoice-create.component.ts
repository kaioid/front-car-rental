import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Invoice } from 'src/app/models/invoice';
import { Rental } from 'src/app/models/rental';
import { InvoiceService } from 'src/app/services/invoice.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html',
  styleUrls: ['./invoice-create.component.css']
})
export class InvoiceCreateComponent implements OnInit {
  
  rentals: Observable<Rental[]>;
  invoice: Invoice = new Invoice();
  submitted = false;
  constructor(private invoiceService: InvoiceService, private rentalService: RentalService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.rentals = this.rentalService.getRentalList();

  }

  newInvoice(): void{
    this.submitted = false;
    this.invoice = new Invoice;
  }

  save(){
    this.invoiceService.createInvoice(this.invoice).subscribe(data=>console.log(data), error => console.log(error));
    this.invoice = new Invoice();
    this.gotoList();
  }

  gotoList(){
    this.router.navigate(['/invoices'])
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

}
