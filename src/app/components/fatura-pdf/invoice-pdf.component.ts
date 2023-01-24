import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/model/cliente';
import { Fatura } from 'src/app/model/fatura';
import { Locacao } from 'src/app/model/locacao';
import { Veiculo } from 'src/app/model/veiculo';
import { CrudService } from 'src/app/service/crud.service';


@Component({
  selector: 'app-invoice-pdf',
  templateUrl: './invoice-pdf.component.html',
  styleUrls: ['./invoice-pdf.component.css']
})
export class InvoicePDFComponent implements OnInit {

  id: number;
  locacao: Locacao;
  veiculos: Observable<Veiculo[]>;
  clientes: Observable<Cliente[]>;
  faturas: Observable<Fatura[]>;

  constructor(private crudService: CrudService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.locacao = new Locacao();
    this.veiculos = this.crudService.getList('veiculos');
    this.clientes = this.crudService.getList('clientes');
    this.faturas = this.crudService.getList('faturas');

    this.id = this.route.snapshot.params['id'];
    this.crudService.get(this.id, 'locacoes').subscribe(data=> {console.log(data);
    this.locacao = data},
    error => console.log(error))
  } 
}
