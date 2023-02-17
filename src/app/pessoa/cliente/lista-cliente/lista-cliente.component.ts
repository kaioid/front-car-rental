import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  queryField: FormGroup;
  queryTouched: boolean = false;
  clientesQuery = []
  clienteQuerySize: number;

  constructor(private crudService: HttpCrudService, private router: Router, private authService: AuthService, private formBuilder: FormBuilder) { }

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
    this.ngOnInit();
    this.gotoList();
  }

  update(id: number){
    this.router.navigate([`clientes/atualizar/${id}`]);
  }

  gotoList(){
    this.router.navigate(['clientes'])
  }

  buscar(){
    if(this.queryField.value!=''){
      for(let cliente of this.clientes){
        if(cliente['cpf']==this.queryField.get('busca').value || 
        cliente['nome'].toUpperCase()==this.queryField.get('busca').value.toUpperCase() ||
        cliente['nome'].toUpperCase().startsWith(this.queryField.get('busca').value.toUpperCase())){
          this.clientesQuery.push(cliente);
        }
      }
    }
    this.clienteQuerySize = this.clientesQuery.length
    this.queryTouched = true;

  }
  resetarQuery(){
    window.location.reload();
  }


}
