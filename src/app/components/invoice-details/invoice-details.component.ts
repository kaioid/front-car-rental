import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from 'src/app/models/invoice';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.css']
})
export class InvoiceDetailsComponent implements OnInit {

  id: number;
  invoice: Invoice

  constructor(private route: ActivatedRoute, private router: Router, private invoiceService: InvoiceService) { }

  ngOnInit(){
    this.invoice = new Invoice();
    this.id = this.route.snapshot.params['id'];
    this.invoiceService.getInvoice(this.id).subscribe(data=> {
      console.log(data);
      this.invoice = data;
    },
    error => console.log(error))
  }

  list(){
    this.router.navigate(['invoices'])
  }

}
