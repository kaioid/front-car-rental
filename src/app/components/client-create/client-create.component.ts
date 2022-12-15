import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CepService } from 'src/app/services/cep.service';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  client: Client = new Client;
  submitted = false;

  constructor(private clientService: ClientService, private router: Router, private cepService: CepService) { }

  ngOnInit(): void {
  }

  newClient(): void{
    this.submitted = false;
    this.client = new Client;
  }

  save(){
    this.clientService.createClient(this.client).subscribe(data=>console.log(data), error => console.log(error));
    this.client = new Client();
    this.gotoList();
  }

  onSubmit(usuarioForm){
    this.submitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/clients'])
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
