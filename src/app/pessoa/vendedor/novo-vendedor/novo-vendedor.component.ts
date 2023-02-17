import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpCrudService } from 'src/app/shared/http-crud.service';
import { ConsultaCepService } from '../../consulta-cep.service';

@Component({
  selector: 'app-novo-vendedor',
  templateUrl: './novo-vendedor.component.html',
  styleUrls: ['./novo-vendedor.component.css']
})
export class NovoVendedorComponent implements OnInit {

  novoVendedorForm: FormGroup; 

  constructor(private crudService: HttpCrudService, private cepService: ConsultaCepService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {

    this.novoVendedorForm = this.formBuilder.group({
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
    let cep = this.novoVendedorForm.get('cep').value;
    this.cepService.consultaCEP(cep).subscribe(dados=>{
      this.resetaDadosForm();
      this.populaDadosForm(dados);
    })
  }

  populaDadosForm(dados){
    this.novoVendedorForm.patchValue({
        logradouro: dados.logradouro,
        complemento: dados.complemento,
        numero: dados.numero,
        bairro: dados.bairro,
        localidade: dados.localidade,
        uf: dados.uf
    });
  }

  resetaDadosForm(){
    this.novoVendedorForm.patchValue({
        logradouro: null,
        complemento: null,
        numero: null,
        bairro: null,
        localidade: null,
        uf: null
    });

  }

  save(){
    this.crudService.create(this.novoVendedorForm.value,'vendedores').subscribe(data=>{console.log(data)});
  }

  onSubmit(){
    this.save();
    this.goToList();
  }

  goToList(){
    this.router.navigate(['vendedores']);
  }

}
