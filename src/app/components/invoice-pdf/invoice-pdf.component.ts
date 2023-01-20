import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Locacao } from 'src/app/model/locacao';
import { CrudService } from 'src/app/service/crud.service';


@Component({
  selector: 'app-invoice-pdf',
  templateUrl: './invoice-pdf.component.html',
  styleUrls: ['./invoice-pdf.component.css']
})
export class InvoicePDFComponent implements OnInit {

  id: number;
  locacao: Locacao;

  constructor(private crudService: CrudService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.locacao = new Locacao();
    this.id = this.route.snapshot.params['id'];
    this.crudService.get(this.id, 'locacoes').subscribe(data=> {console.log(data);
    this.locacao = data},
    error => console.log(error))
  } 
}
