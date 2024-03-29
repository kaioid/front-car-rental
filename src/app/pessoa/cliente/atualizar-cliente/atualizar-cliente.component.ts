import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpCrudService } from 'src/app/shared/http-crud.service';

import { ConsultaCepService } from '../../consulta-cep.service';

@Component({
  selector: 'app-atualizar-cliente',
  templateUrl: './atualizar-cliente.component.html',
  styleUrls: ['./atualizar-cliente.component.css']
})
export class AtualizarClienteComponent implements OnInit {

  id: number;
  cliente: any;
  atualizarClienteForm: FormGroup; 

  constructor(private crudService: HttpCrudService, private cepService: ConsultaCepService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.cliente = this.crudService.get(this.id, 'clientes').subscribe(cliente=>{
      this.cliente = cliente;

      this.atualizarClienteForm = this.formBuilder.group({
        cpf: [this.cliente['cpf']],
        nome: [this.cliente['nome']],
        email: [this.cliente['email']],
        senha: [this.cliente['senha']],
        cep: [this.cliente['cep']],
        logradouro: [this.cliente['logradouro']],
        numero: [this.cliente['numero']],
        bairro: [this.cliente['bairro']],
        complemento: [this.cliente['complemento']],
        localidade: [this.cliente['localidade']],
        uf: [this.cliente['uf']] 
    })
    console.log(this.atualizarClienteForm.value)
    });
  }

  consultaCEP(){
    let cep = this.atualizarClienteForm.get('cep').value;
    this.cepService.consultaCEP(cep).subscribe(dados=>{
      this.resetaDadosForm();
      this.populaDadosForm(dados);
    })
  }

  populaDadosForm(dados){
    this.atualizarClienteForm.patchValue({
        logradouro: dados.logradouro,
        complemento: dados.complemento,
        numero: dados.numero,
        bairro: dados.bairro,
        localidade: dados.localidade,
        uf: dados.uf
      
    });
  }

  resetaDadosForm(){
    this.atualizarClienteForm.patchValue({
        logradouro: null,
        complemento: null,
        numero: null,
        bairro: null,
        localidade: null,
        uf: null
    });

  }

  clienteUptade(){
    this.crudService.update(this.id, this.atualizarClienteForm.value, 'clientes').subscribe(cliente=>{})
  }

  atualizar(){
    this.clienteUptade();
    this.gotoList();
  }
  
  gotoList(){
    this.router.navigate(['clientes']);
  }


}
