import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CepService } from 'src/app/services/cep.service';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

  id: number;
  client: Client;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, private clientService: ClientService, private cepService: CepService) { }

  ngOnInit(){
    this.client = new Client();
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClient(this.id).subscribe(data =>{
      console.log(data);
      this.client = data;
    },
    error => console.log(error));
  }

  clientUpdate(){
    this.clientService.updateClient(this.id, this.client).subscribe(data=> console.log(data), error => console.log(error));
    this.client = new Client();
    this.gotoList();
  }
  
  onSubmit(usuarioForm){
    this.clientUpdate();
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
