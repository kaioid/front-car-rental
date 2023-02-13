import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpCrudService } from 'src/app/shared/http-crud.service';

import { ConsultaCepService } from '../../consulta-cep.service';

@Component({
  selector: 'app-novo-cliente',
  templateUrl: './novo-cliente.component.html',
  styleUrls: ['./novo-cliente.component.css']
})
export class NovoClienteComponent implements OnInit {

  novoClienteForm: FormGroup; 

  constructor(private crudService: HttpCrudService, private cepService: ConsultaCepService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {

    this.novoClienteForm = this.formBuilder.group({
      cpf: [null],
      nome: [null],
      email: [null],
      senha: [null],
      cep: [null],
      logradouro: [null],
      numero: [null],
      bairro: [null],
      complemento: [null],
      localidade: [null],
      uf: [null]

    });
  }

  consultaCEP(){
    let cep = this.novoClienteForm.get('cep').value;
    this.cepService.consultaCEP(cep).subscribe(dados=>{
      this.resetaDadosForm();
      this.populaDadosForm(dados);
    })
  }

  populaDadosForm(dados){
    this.novoClienteForm.patchValue({
        logradouro: dados.logradouro,
        complemento: dados.complemento,
        numero: dados.numero,
        bairro: dados.bairro,
        localidade: dados.localidade,
        uf: dados.uf
    });
  }

  resetaDadosForm(){
    this.novoClienteForm.patchValue({
        logradouro: null,
        complemento: null,
        numero: null,
        bairro: null,
        localidade: null,
        uf: null
    });

  }

  save(){
    this.crudService.create(this.novoClienteForm.value,'clientes').subscribe(data=>{console.log(data)});
  }

  onSubmit(){
    this.save();
    this.goToList();
  }

  goToList(){
    this.router.navigate(['clientes']);
  }

}
