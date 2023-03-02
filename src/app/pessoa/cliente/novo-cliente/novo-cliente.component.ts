import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpCrudService } from 'src/app/shared/http-crud.service';

import { ConsultaCepService } from '../../consulta-cep.service';
import { ConsultaPessoaService } from '../../consulta-pessoa.service';
import { Validacoes } from '../../validacoes';

@Component({
  selector: 'app-novo-cliente',
  templateUrl: './novo-cliente.component.html',
  styleUrls: ['./novo-cliente.component.css']
})
export class NovoClienteComponent implements OnInit {

  novoClienteForm: FormGroup; 

  constructor(private crudService: HttpCrudService, private cepService: ConsultaCepService, private formBuilder: FormBuilder, private router: Router, private consultaPessoa: ConsultaPessoaService) { }

  ngOnInit() {

    this.novoClienteForm = this.formBuilder.group({
      cpf: [null, [Validators.required, Validacoes.validaCpf]],
      nome: [null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50)
        ]
      ],
      email: [null, [Validators.email, Validators.required]],
      senha: [null, [Validators.required]],
      cep: [null, [Validators.required, Validacoes.validaCep]],
      logradouro: [null],
      numero: [null, [Validators.required]],
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
    this.crudService.create(this.novoClienteForm.value, 'clientes').subscribe()
  }

  onSubmit(){
    this.save();
    window.location.reload();
  }

  goToList(){
    this.router.navigate(['clientes']);
  }

}
