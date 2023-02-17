import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpCrudService } from 'src/app/shared/http-crud.service';
import { ConsultaCepService } from '../../consulta-cep.service';

@Component({
  selector: 'app-atualizar-vendedor',
  templateUrl: './atualizar-vendedor.component.html',
  styleUrls: ['./atualizar-vendedor.component.css']
})
export class AtualizarVendedorComponent implements OnInit {

  id: number;
  vendedor: any;
  atualizarVendedorForm: FormGroup; 

  constructor(private crudService: HttpCrudService, private cepService: ConsultaCepService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.vendedor = this.crudService.get(this.id, 'vendedores').subscribe(vendedor=>{
      this.vendedor = vendedor;

      this.atualizarVendedorForm = this.formBuilder.group({
        cpf: [this.vendedor['cpf']],
        nome: [this.vendedor['nome']],
        email: [this.vendedor['email']],
        senha: [this.vendedor['senha']],
        cep: [this.vendedor['cep']],
        logradouro: [this.vendedor['logradouro']],
        numero: [this.vendedor['numero']],
        bairro: [this.vendedor['bairro']],
        complemento: [this.vendedor['complemento']],
        localidade: [this.vendedor['localidade']],
        uf: [this.vendedor['uf']] 
    })
    console.log(this.atualizarVendedorForm.value)
    });
  }

  consultaCEP(){
    let cep = this.atualizarVendedorForm.get('cep').value;
    this.cepService.consultaCEP(cep).subscribe(dados=>{
      this.resetaDadosForm();
      this.populaDadosForm(dados);
    })
  }

  populaDadosForm(dados){
    this.atualizarVendedorForm.patchValue({
        logradouro: dados.logradouro,
        complemento: dados.complemento,
        numero: dados.numero,
        bairro: dados.bairro,
        localidade: dados.localidade,
        uf: dados.uf
      
    });
  }

  resetaDadosForm(){
    this.atualizarVendedorForm.patchValue({
        logradouro: null,
        complemento: null,
        numero: null,
        bairro: null,
        localidade: null,
        uf: null
    });

  }

  vendedorUptade(){
    this.crudService.update(this.id, this.atualizarVendedorForm.value, 'vendedores').subscribe(vendedor=>{})
  }

  atualizar(){
    this.vendedorUptade();
    this.gotoList();
  }
  
  gotoList(){
    this.router.navigate(['vendedores']);
  }
}
