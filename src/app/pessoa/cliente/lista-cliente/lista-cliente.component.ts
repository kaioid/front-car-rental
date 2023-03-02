import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/shared/auth.service';
import { HttpCrudService } from 'src/app/shared/http-crud.service';
import { ConsultaPessoaService } from '../../consulta-pessoa.service';


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
  queryField: FormGroup;
  queryTouched: boolean = false;
  clientesQuery = []
  clienteQuerySize: number;

  constructor(private crudService: HttpCrudService, private router: Router, private authService: AuthService, private formBuilder: FormBuilder, private consultaPessoa: ConsultaPessoaService) { }

  ngOnInit() {
    this.queryField = this.formBuilder.group({busca: ['', [Validators.required]]})
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
    window.location.reload();
  }

  update(id: number){
    this.router.navigate([`clientes/atualizar/${id}`]);
  }


  resetarQuery(){
    window.location.reload();
  }

  buscar(){
    this.clientesQuery = this.consultaPessoa.getClienteQuery('clientes', this.queryField.get('busca').value.toUpperCase())
    this.queryTouched = true;
  }


}
