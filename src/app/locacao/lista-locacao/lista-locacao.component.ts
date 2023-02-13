import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';
import { HttpCrudService } from 'src/app/shared/http-crud.service';

@Component({
  selector: 'app-lista-locacao',
  templateUrl: './lista-locacao.component.html',
  styleUrls: ['./lista-locacao.component.css']
})
export class ListaLocacaoComponent implements OnInit {

  abertas: Observable<Object[]>;
  fechadas: Observable<Object[]>;
  veiculos: Observable<Object[]>;
  vendedores: Observable<Object[]>;
  role: string;

  constructor(private crudService: HttpCrudService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.reloadData();
    this.role = this.authService.getUsuarioTipo();
  }

  reloadData(){
    this.abertas = this.crudService.getList('locacoes/abertos');
    this.fechadas = this.crudService.getList('locacoes/fechados');
    this.veiculos = this.crudService.getList('veiculos');
    this.vendedores = this.crudService.getList('vendedores');
  }

  deleteRental(id: number){
    this.crudService.delete(id, 'locacoes').subscribe(data=>{
      console.log(data)
      this.reloadData();
    },
    error => console.log(error));
  }

  updateRental(id: number){
    this.router.navigate(['locacoes/update', id]);
  }

}

