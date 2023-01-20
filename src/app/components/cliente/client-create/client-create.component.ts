import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CepService } from 'src/app/service/cep.service';
import { CrudService } from 'src/app/service/crud.service';
import { Cliente } from 'src/app/model/cliente'; 


@Component({
  selector: 'app-e-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  cliente: Cliente = new Cliente;
  submitted = false;

  constructor(private crudService: CrudService, private router: Router, private cepService: CepService) { }

  ngOnInit(): void {
  }

  newClient(): void{
    this.submitted = false;
    this.cliente = new Cliente;
  }

  save(){
    this.crudService.create(this.cliente, 'clientes').subscribe(data=>console.log(data), error => console.log(error));
    this.cliente = new Cliente();
    this.gotoList();
  }

  onSubmit(usuarioForm){
    this.submitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/clientes'])
  }

  consultaCEP(cep, form) {
    cep = cep.replace(/\D/g, '');

    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep)
      .subscribe(dados => this.populaDados(dados, form));
    }
  }

  populaDados(dados: any, formulario){
    formulario.form.patchValue({
      logradouro: dados.logradouro,
      complemento: dados.complemento,
      numero: dados.numero,
      bairro: dados.bairro,
      localidade: dados.localidade,
      uf: dados.uf
    });
  }

}
