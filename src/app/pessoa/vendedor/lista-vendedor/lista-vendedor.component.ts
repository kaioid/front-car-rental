import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';
import { HttpCrudService } from 'src/app/shared/http-crud.service';

@Component({
  selector: 'app-lista-vendedor',
  templateUrl: './lista-vendedor.component.html',
  styleUrls: ['./lista-vendedor.component.css']
})
export class ListaVendedorComponent implements OnInit {

  vendedores: Observable<Object[]>;
  role: string;

  constructor(private crudService: HttpCrudService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.reloadData();
    this.role = this.authService.getUsuarioTipo();
  }


  reloadData(){
    this.vendedores = this.crudService.getList('vendedores');
  }

  delete(id: number){
    this.crudService.delete(id, 'vendedores').subscribe(vendedor=>{});
    this.ngOnInit();
    this.gotoList();
  }

  update(id: number){
    this.router.navigate([`vendedores/atualizar/${id}`]);
  }

  gotoList(){
    this.router.navigate(['vendedores'])
  }


}
