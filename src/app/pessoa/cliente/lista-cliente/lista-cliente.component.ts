import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/auth.service';
import { HttpCrudService } from 'src/app/shared/http-crud.service';


@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {

  clientes;
  role: string;
  data: Array<any>;
  totalRecords: number;
  page: number = 1;

  constructor(private crudService: HttpCrudService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.role = this.authService.getUsuarioTipo();
    this.reloadData();
  }


  reloadData(){
    this.crudService.getList('clientes').subscribe(clientes=>{
      this.clientes=clientes
      let aux = []
      for(let cliente of this.clientes){
        aux.push(cliente['id'])
      }
      this.totalRecords = aux.length;
    })
  }

  delete(id: number){
    this.crudService.delete(id, 'clientes').subscribe(cliente=>{});
    this.ngOnInit();
    this.gotoList();
  }

  update(id: number){
    this.router.navigate([`clientes/atualizar/${id}`]);
  }

  gotoList(){
    this.router.navigate(['clientes'])
  }


}
