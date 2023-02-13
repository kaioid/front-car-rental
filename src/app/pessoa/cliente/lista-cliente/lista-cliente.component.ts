import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpCrudService } from 'src/app/shared/http-crud.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {

  clientes: Observable<Object[]>;

  constructor(private crudService: HttpCrudService, private router: Router, private zone: NgZone) { }

  ngOnInit() {
    this.reloadData();
  }

  autoRefresh(){
    this.zone.runOutsideAngular(()=>{
      window.setInterval(()=>{
        this.reloadData();
      },100)
    })
  }

  reloadData(){
    this.clientes = this.crudService.getList('clientes');
  }

  deleteCliente(id: number){
    this.crudService.delete(id, 'clientes').subscribe(cliente=>{});
    this.ngOnInit();
  }

}
