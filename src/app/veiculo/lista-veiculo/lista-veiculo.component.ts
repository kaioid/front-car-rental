import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpCrudService } from 'src/app/shared/http-crud.service';

@Component({
  selector: 'app-lista-veiculo',
  templateUrl: './lista-veiculo.component.html',
  styleUrls: ['./lista-veiculo.component.css']
})
export class ListaVeiculoComponent implements OnInit {

  veiculos: Observable<Object[]>;
  modoExibicao: boolean = false;

  constructor(private crudService: HttpCrudService, private router: Router) { }

  ngOnInit(){
    this.veiculos = this.crudService.getList('veiculos');
  }

  listMode(){
    this.modoExibicao = false;
  }

  cardsMode(){
    this.modoExibicao = true;
  }

}
