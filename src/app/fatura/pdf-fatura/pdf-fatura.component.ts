import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpCrudService } from 'src/app/shared/http-crud.service';

@Component({
  selector: 'app-pdf-fatura',
  templateUrl: './pdf-fatura.component.html',
  styleUrls: ['./pdf-fatura.component.css']
})
export class PdfFaturaComponent implements OnInit {

  id: number;
  locacao;
  fatura;
  veiculos: Observable<Object[]>;
  clientes: Observable<Object[]>;
  faturas: Observable<Object[]>;

  constructor(private crudService: HttpCrudService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.veiculos = this.crudService.getList('veiculos');
    this.clientes = this.crudService.getList('clientes');
    this.faturas = this.crudService.getList('faturas');

    this.id = this.route.snapshot.params['id'];
    this.crudService.get(this.id, 'locacoes').subscribe(data=> {console.log(data);
    this.locacao = data;
  },
    error => console.log(error))
    this.setFatura();
  }

  setFatura(){
    this.faturas.subscribe(data=>{
      for(let fatura of data){
        if(fatura['locacao'] && fatura['locacao']['id']==this.id){
          this.fatura=fatura;
        }
      }
    })
  }

}
