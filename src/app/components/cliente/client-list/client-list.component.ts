import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CrudService } from 'src/app/service/crud.service';
import { Cliente } from 'src/app/model/cliente'; 


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clientes: Observable<Cliente[]>;

  constructor(private crudService: CrudService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.clientes = this.crudService.getList('clientes');
  }

  deleteClient(id: number){
    this.crudService.delete(id,'clientes').subscribe(data=>{
      console.log(data)
      this.reloadData();
    },
    error => console.log(error));
  }

  clientDetails(id: number){
    this.router.navigate(['clientes/', id]);
  }

  updateClient(id: number){
    this.router.navigate(['clientes/update', id])
  }

}
