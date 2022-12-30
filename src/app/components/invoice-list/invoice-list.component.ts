import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from 'src/app/models/invoice';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  invoices: Observable<Invoice[]>;
  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.invoices = this.invoiceService.getInvoiceList();    
  }

}
