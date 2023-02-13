import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';
import { HttpCrudService } from 'src/app/shared/http-crud.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {

  clientes: Observable<Object[]>;
  role: string;

  constructor(private crudService: HttpCrudService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.reloadData();
    this.role = this.authService.getUsuarioTipo();
  }


  reloadData(){
    this.clientes = this.crudService.getList('clientes');
  }

  delete(id: number){
    this.crudService.delete(id, 'clientes').subscribe(cliente=>{});
    this.ngOnInit();
    this.gotoList();
  }

  update(id: number){
    this.router.navigate([`clientes/update/${id}`]);
  }

  gotoList(){
    this.router.navigate(['clientes'])
  }


}
